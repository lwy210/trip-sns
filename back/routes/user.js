const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const { Op } =require('sequelize');

const { User, Post, Image, Comment } = require('../models');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

const router = express.Router();

router.get('/', async (req, res, next) => { // GET /user
  try {
    if (req.user) {
      const fullUserWithoutPassword = await User.findOne({
        where: { id: req.user.id },
        attributes: {
        exclude: ['password']
        },
        include: [{
          model: Post,
          attributes: ['id'],
        }, {
          model: User,
          as: 'Followings',
          attributes: ['id'],
        }, {
          model: User,
          as: 'Followers',
          attributes: ['id'],
        },{
          model: Comment,
          as: 'Comments',
          attributes: ['id'],
        },{
          model: Post,
          as: 'Liked',
          attributes: ['id'],
        }]
      })
      res.status(200).json(fullUserWithoutPassword); //action.data로 간다.
    } else {
      res.status(200).json(null);
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

//팔로워한 사람 불러오기
router.get('/followers', isLoggedIn, async (req, res, next) => { // GET /user/followers
  try {
    const user = await User.findOne({ where: { id: req.user.id }});
    if (!user) {
      res.status(403).send('없는 사람을 찾으려고 하시네요?');
    }
    const followers = await user.getFollowers({
      limit: parseInt(req.query.limit, 10),
    });
    res.status(200).json(followers);
  } catch (error) {
    console.error(error);
    next(error);
  }
}); 
//팔로잉한사람 불러오기
router.get('/followings', isLoggedIn, async (req, res, next) => { // GET /user/followings
  try {
    const user = await User.findOne({ where: { id: req.user.id }});
    if (!user) {
      res.status(403).send('없는 사람을 찾으려고 하시네요?');
    }
    const followings = await user.getFollowings({
      limit: parseInt(req.query.limit, 10),
    });
    res.status(200).json(followings);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get('/:userId', async (req, res, next) => { // GET /user/1
  try {
      const fullUserWithoutPassword = await User.findOne({
        where: { id: req.params.userId },
        attributes: {
        exclude: ['password']
        },
        include: [{
          model: Post,
          attributes: ['id'],
        }, {
          model: User,
          as: 'Followings',
          attributes: ['id'],
        }, {
          model: User,
          as: 'Followers',
          attributes: ['id'],
        },{  
          model: Comment,
          as: 'Comments',
          attributes: ['id'],
        },{
          model: Post, //내가 좋아요를 누른 게시물
          as: 'Liked',
          attributes: ['id'],
        }]
      })
      if(fullUserWithoutPassword) {
        const data = fullUserWithoutPassword.toJSON();
        data.Posts = data.Posts.length; // 개인정보 침해 예방
        data.Followers = data.Followers.length;
        data.Followings = data.Followings.length;
        data.Comments = data.Comments.length;
        data.Liked = data.Liked.length; 
        res.status(200).json(data);
    } else {
      res.status(404).json('존재하지 않는 사용자입니다.');
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});
//그 유저의 포스트를 다 가져온다.
router.get('/:userId/posts', async (req, res, next) => { // GET /user/1/posts
  try {
    const where = { UserId: req.params.userId};
    if (parseInt(req.query.lastId, 10)) { // 초기 로딩이 아닐 때
      where.id = { [Op.lt]: parseInt(req.query.lastId, 10)}
    } // 21 20 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1
    const posts = await Post.findAll({
      where,
      limit: 10,
      order: [
        ['createdAt', 'DESC'],
        [Comment, 'createdAt', 'DESC'],
      ],
      include: [{
        model: User,
        attributes: ['id', 'nickname'],
      }, {
        model: Image,
      }, {
        model: Comment,
        include: [{
          model: User,
          attributes: ['id', 'nickname'],
        }],
      }, {
        model: User, // 좋아요 누른 사람
        as: 'Likers',
        attributes: ['id'],
      }, {
        model: Post,
        as: 'Retweet',
        include: [{
          model: User,
          attributes: ['id', 'nickname'],
        }, {
          model: Image,
        }]
      }],
    });
    //console.log(posts);
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post('/login', isNotLoggedIn, (req, res, next) => {
  passport.authenticate('local', (err, user, info) => { //passport 전략 실행 local.js에
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      return res.status(401).send(info.reason);
    }
    return req.login(user, async (loginErr) => { //passport 로그인 쿠키랑 id만
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      const fullUserWithoutPassword = await User.findOne({
        where: { id: user.id },
        attributes: {
          exclude: ['password']
        },
        include: [{
          model: Post,
          attributes: ['id'],
        }, {
          model: User, 
          as: 'Followings',
          attributes: ['id'],
        }, {
          model: User,
          as: 'Followers',
          attributes: ['id'],
        },{
          model: Comment,
          as: 'Comments',
          attributes: ['id'],
      },{
        model: Post,
        as: 'Liked',
        attributes: ['id'],
      }]
      })
      return res.status(200).json(fullUserWithoutPassword); //이때 데이터 전부
    });
  })(req, res, next);
});

router.post('/', isNotLoggedIn, async (req, res, next) => { // POST /user/
  try {
    const exUser = await User.findOne({ //db에서 찾는다.
      where: {
        email: req.body.email,
      }
    });
    if (exUser) {
      return res.status(403).send('이미 사용 중인 아이디입니다.');
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    await User.create({ //테이블 안에 데이터를 넣는다.
      email: req.body.email, //req.body로 프런트로부터 받아온다.
      nickname: req.body.nickname,
      password: hashedPassword,
    });
    res.status(201).send('ok');
  } catch (error) {
    console.error(error);
    next(error); // status 500 //넥스트에 에러 보내준다.
  }
});

//로그아웃 라우터 - 세션 지우기, 쿠키 지우기
router.post('/logout', isLoggedIn, (req, res) => {
  req.logout();
  req.session.destroy();
  res.send('ok');
});

//닉네임 수정
router.patch('/nickname', isLoggedIn, async (req, res, next) => {
  try {
    await User.update({
      nickname: req.body.nickname,
    }, {
      where: { id: req.user.id },
    });
    res.status(200).json({ nickname: req.body.nickname });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.patch('/:userId/follow', isLoggedIn, async (req, res, next) => { // PATCH /user/1/follow
  try {
    const user = await User.findOne({ where: { id: req.params.userId }});
    if (!user) {
      res.status(403).send('없는 사람을 팔로우하려고 하시네요?');
    }
    await user.addFollowers(req.user.id);
    res.status(200).json({ UserId: parseInt(req.params.userId, 10) });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.delete('/:userId/follow', isLoggedIn, async (req, res, next) => { // DELETE /user/1/follow
  try {
    const user = await User.findOne({ where: { id: req.params.userId }});
    if (!user) {
      res.status(403).send('없는 사람을 언팔로우하려고 하시네요?');
    }
    await user.removeFollowers(req.user.id);
    res.status(200).json({ UserId: parseInt(req.params.userId, 10) });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

//팔로워 지우기
router.delete('/follower/:userId', isLoggedIn, async (req, res, next) => { // DELETE /user/follower/2
  try {
    const user = await User.findOne({ where: { id: req.params.userId }});
    if (!user) {
      res.status(403).send('없는 사람을 차단하려고 하시네요?');
    }
    await user.removeFollowings(req.user.id);
    res.status(200).json({ UserId: parseInt(req.params.userId, 10) });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;