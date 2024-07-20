const express = require('express');

// express app
const app = express();

// listen for requests
app.listen(3000);

// register view engine
app.set('view engine', 'ejs');
// app.set('views', 'myviews');

app.get('/', (req, res) => {
    const rps=[
        {title: 'Special issue in Applied Sciences - Advances in Computer Graphics and 3D Technologies', snippet:'Computer graphics and 3D technology have made a significant impact on our daily life, ranging from fields such as the entertainment industry (film, gaming, AR/VR) and healthcare medical visualisation to industrial digital twins.'},
        {title: 'Culture Clash: When Deceptive Design Meets Diverse Player Expectations', snippet:'Deceptive game designs that intentionally manipulate players are increasingly common in the gaming industry, but the impact on players is not well studied. While studies have revealed player frustration , there is a gap in understanding how cultural attributes affect the impact of deceptive design in games. '},
        {title: 'Effectiveness of 4Cs Skills Transfer from Sandbox Gaming Environment to Near and Far Contexts', snippet:'4Cs Skills Transfer from Sandbox Gaming Environment to Near and Far Contexts'},
        {title: '(Anti)Social: Exploring Emotional Challenges in Multiplayer Experiences', snippet:'Multiplayer gaming research has most often been examined from a prosocial perspective due to its benefits in encouraging cooperative behaviors. Apart from online toxicity research, negatively-valenced dynamics are less studied. '},
        {title: 'Shopping in Immersive Virtual Reality: Effects of Diminishing Visual, Auditory, and Cognitive Demands on Workload', snippet:'Introduction. Immersive virtual reality applications in areas such as gaming, training, and neurorehabilitation are growing in popularity. While most applications aim for maximal realism, simplifying the virtual environment might bring several advantages, such as a reduction in users’ workload and potentially promoting learning'},

    ]
  // res.send('<p>home page</p>');
  res.render('index',{rps});
});

app.get('/publish', (req, res) => {
  // res.send('<p>publish page</p>');
  res.render('publish');
});

// redirects
app.get('/publish-us', (req, res) => {
  res.redirect('/publish');
});

app.get('/share', (req, res) => {
    // res.send('<p>share page</p>');
    res.render('share');
  });
  
  // redirects
  app.get('/share-us', (req, res) => {
    res.redirect('/share');
  });

  app.get('/collaborate', (req, res) => {
    // res.send('<p>collaborate page</p>');
    res.render('collaborate');
  });
  
  // redirects
  app.get('/collaborate-us', (req, res) => {
    res.redirect('/collaborate');
  });

// 404 page
app.use((req, res) => {
  res.status(404).render('404');
});