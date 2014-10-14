<!DOCTYPE html>
<html>

<head>
    <title>Naphi - Epsilon Chapter</title>

    <link rel="stylesheet" href="styles/styles.css" />
    <link rel="stylesheet" href="styles/bootstrap.min.css" />
    <link rel="stylesheet" href="styles/owl.carousel.css" />
    <link rel="stylesheet" type="text/css" href="http://cdn.jsdelivr.net/jquery.slick/1.3.11/slick.css"/>
    <link href='https://fonts.googleapis.com/css?family=Roboto&subset=latin,greek,greek-ext' rel='stylesheet' type='text/css'>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
</head>

<body>

    <div id="map-canvas"></div>

    <div class="fade-bg"></div>
    <div class="general-content opacity">
        <ul class="navigation">
          <li data-nav="history" class="active">History</li>
          <li data-nav="mission">Mission</li>
          <li data-nav="rush">Rush</li>
          <li data-nav="chapters">Chapters</li>
          <li data-nav="gallery">Gallery</li>
          <li data-nav="contact">Contact</li>
        </ul>
        <div class="overflow">
            <div id="history" class="content-text">
              <p>Nu Alpha Phi, Epsilon Chapter, was founded by five asian male students of various backgrounds. As a result of the lack of unity and pride common among students of NYU-Poly, these five men emerged together and embarked on a mission to further enhance the college experience for themselves and their peers. These men fully accepted the responsibilities of creating the founding class of Epsilon Chapter at NYU-Poly.</p>

              <p>Eugene Eng, Bailey Peng, Regis Tsai, Tyler Yao, and Peter Yu, worked together through a tried and true educational process which taught them the dedication and virtues which would guide them through life.</p>

              <p>In May 14, 2000, Mammoth, Rage, Bounce, Shock, and Method, established the Epsilon Alpha class, thereby creating the first Asian-interest fraternity to exist in NYU-Poly. Following the example of those preceding them, they accepted the task of expanding Nu Alpha Phi and what it stands for, to NYU-Poly and to the world.</p>
            </div>

            <div id="mission" class="content-text">
              <p>After being incorporated in the Summer of '96, Nu Alpha Phi Fraternity, Inc. assumes the legitimate body of a national corporation. Along with this venture, comes responsibilities and goals that we, as a part of this corporation must fulfill and uphold to make this Fraternity grow bigger and stronger and and become a more prominent body in the surrounding community.</p>

              <p>Our purpose as an Asian-oriented fraternity is to bring knowledge and awareness of various Asian cultures and society to the college campuses and surrounding communities while instilling the values of loyalty and brotherhood in our hearts.</p>

              <p>We strive for perfection and excellence, and with professionalism in everything we do.</p>

              <p>Being a social/cultural fraternity brings us the opportunity to not only educate but provide entertainment and hold events for the student body and surrounding community.</p>

              <p>We shall not discriminate upon bases of race or ethnicity.</p>

              <p>We will introduce the Greek system to the Asian community on various college campuses on the East Coast.</p>

              <p>We struggle to bring Unity and recognition to the Asian community and work w/ various other Asian Greek Organizations such as, Lambda Phi Epsilon, Pi Delta Psi, alpha Kappa Delta Phi, Kappa Phi Lambda, Sigma Psi Zeta, Sigma Omicron Pi, Kappa Phi Alpha, Sigma Lambda Kappa and Psi Omega Sigma.</p>

              <p>Our goal is create a network of successful Alumnis both nationally and internationally and to become an important part of the Asian Community.</p>
            </div>

            <div id="rush" class="content-text">
              <p>The Brothers of Nu Alpha Phi look for unique individuals who are interested in aiming higher in life. If you are ready for a change in your life, here's your chance.</p>

              <p>RUSH is a process held at the beginning of each semester. It consists of events which help the brothers and the interests to acquaint with one another at a personal level. There are no obligations to join. Attending the RUSH provides a great opportunity to meet new people who may share similiar ideas and interests with you. You will not only make new friends with the brothers from that school, but with brothers all over New York as well.</p>

              <p>The requirements are simple. Each candidate is required to attend at least TWO RUSH events along with a final interview (mandatory) in order to be considered for acknowledgement.</p>

              <p>The brothers of Nu Alpha Phi welcomes you to attend. What are you waiting for? You want to waste four years of college?</p>

              <p>For more information, contact <a href="mailto:nyu.naphi@gmail.com">nyu.naphi@gmail.com</a></p>
            </div>

            <div id="chapters" class="chapter-navigation content-text">
                <li id="cn-alpha" data-chapter="alpha">A - Albany SUNY</li>
                <li id="cn-beta" data-chapter="beta">B - City University of New York</li>
                <li id="cn-gamme" data-chapter="gamma">&#915; - Stonybrook University</li>
                <li id="cn-delta" data-chapter="delta">&#916; - University at Buffalo</li>
                <li id="cn-epsilon" data-chapter="epsilon">E - NYU Poly</li>
                <li id="cn-zeta" data-chapter="zeta">Z - Binghamton University</li>
                <li id="cn-eta" data-chapter="eta">H - Syracuse University</li>
                <li id="cn-theta" data-chapter="theta">&#920; - Stevens Institute of Technology</li>
                <li id="cn-iota" data-chapter="iota">I - Rutgers University</li>
            </div>

            <div id="gallery" class="content-text">
                  <div id="lazy-load">
                  </div>
            </div>

            <div id="contact" class="content-text">
              <div id="contact-form">
                <h5>Name:</h5>
                  <input type="text" name="name" required="true" />
                <h5>Email Address:</h5>
                  <input type="text" name="email" value="" maxlength="50" required="true" />
                <h5>Message:</h5>
                  <textarea rows="7" cols="50" name="message" required="true"></textarea>

                  <button id="contact-submit">SUBMIT</button>
                  <div id="contact-results"></div>
              </div>
            </div>

        </div><!-- overflow -->
    </div><!-- general-content -->

    <div class="social-widgets opacity">
        <li id="sw-facebook" class="social-icon">
            <a href="http://facebook.com/NuAlphaPhi" target="_blank"><img src="images/facebook.png"></a>
        </li>
        <li id="sw-twitter" class="social-icon">
            <a href="https://twitter.com/NuAlphaPhi" target="_blank"><img src="images/twitter.png"></a>
        </li>
        <li id="sw-instagram" class="social-icon">
            <a href="http://instagram.com/nualphaphi" target="_blank"><img src="images/instagram.png" target="_blank"></a>
        </li>
        <li id="sw-blogspot" class="social-icon">
            <a href="http://nualphaphi.blogspot.com/" target="_blank"><img src="images/blogspot.png" target="_blank"></a>
        </li>
        <li id="sw-youtube" class="social-icon">
            <a href="http://www.youtube.com/user/NuAlphaPhiNational/videos" target="_blank"><img src="images/youtube.png" target="_blank"></a>
        </li>
    </div>

    <div class="home opacity">
      <img src="images/home.png">
    </div>

    <footer class="opacity">
        <div class="organization-name">NU ALPHA PHI FRATERNITY INC.</div>
        <div class="chapter-name">EPSILON CHAPTER @ NYU</div>
    </footer>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=visualization"></script>
    <script src="lib/owl.carousel.min.js"></script>
    <script src="lib/rich-marker.js"></script>

    <!-- <script src="script/gmaps-styles.js"></script>
    <script src="script/chapter-info.js"></script>
    <script src="script/gallery-images.js"></script>
    <script src="script/main.js"></script>
    <script src="script/contact.js"></script> -->
    <script src="script/script.min.js"></script>
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-55693823-1', 'auto');
      ga('send', 'pageview');

    </script>
</body>

</html>