USE linkstagram_db;

DROP TABLE top500;
CREATE TABLE top500(
id INT NOT NULL AUTO_INCREMENT,
rank INT NOT NULL,
url VARCHAR(500),
PRIMARY KEY (id)
);

INSERT INTO top500 (rank, url)

VALUES
(1,facebook.com/),
(2,twitter.com/),
(3,google.com/),
(4,youtube.com/),
(5,instagram.com/),
(6,linkedin.com/),
(7,wordpress.org/),
(8,pinterest.com/),
(9,wikipedia.org/),
(10,wordpress.com/),
(11,blogspot.com/),
(12,apple.com/),
(13,adobe.com/),
(14,tumblr.com/),
(15,youtu.be/),
(16,amazon.com/),
(17,goo.gl/),
(18,vimeo.com/),
(19,flickr.com/),
(20,microsoft.com/),
(21,yahoo.com/),
(22,bit.ly/),
(23,vk.com/),
(24,qq.com/),
(25,godaddy.com/),
(26,reddit.com/),
(27,buydomains.com/),
(28,w3.org/),
(29,nytimes.com/),
(30,t.co/),
(31,europa.eu/),
(32,statcounter.com/),
(33,weebly.com/),
(34,blogger.com/),
(35,wp.com/),
(36,jimdo.com/),
(37,bbc.co.uk/),
(38,github.com/),
(39,soundcloud.com/),
(40,yandex.ru/),
(41,baidu.com/),
(42,mozilla.org/),
(43,myspace.com/),
(44,gravatar.com/),
(45,google.de/),
(46,addthis.com/),
(47,theguardian.com/),
(48,google.co.jp/),
(49,nih.gov/),
(50,cnn.com/),
(51,miitbeian.gov.cn/),
(52,stumbleupon.com/),
(53,paypal.com/),
(54,digg.com/),
(55,wix.com/),
(56,huffingtonpost.com/),
(57,creativecommons.org/),
(58,imdb.com/),
(59,issuu.com/),
(60,yelp.com/),
(61,feedburner.com/),
(62,bluehost.com/),
(63,addtoany.com/),
(64,dropbox.com/),
(65,amazonaws.com/),
(66,forbes.com/),
(67,google.co.uk/),
(68,tinyurl.com/),
(69,parallels.com/),
(70,wixsite.com/),
(71,washingtonpost.com/),
(72,go.com/),
(73,etsy.com/),
(74,msn.com/),
(75,wsj.com/),
(76,slideshare.net/),
(77,archive.org/),
(78,eventbrite.com/),
(79,ameblo.jp/),
(80,doubleclick.net/),
(81,mail.ru/),
(82,telegraph.co.uk/),
(83,sourceforge.net/),
(84,fc2.com/),
(85,amazon.co.uk/),
(86,ebay.com/),
(87,livejournal.com/),
(88,e-recht24.de/),
(89,miibeian.gov.cn/),
(90,free.fr/),
(91,dailymail.co.uk/),
(92,bloomberg.com/),
(93,reuters.com/),
(94,amzn.to/),
(95,typepad.com/),
(96,yahoo.co.jp/),
(97,wikimedia.org/),
(98,cpanel.net/),
(99,about.com/),
(100,usatoday.com/),
(101,eepurl.com/),
(102,cpanel.com/),
(103,bing.com/),
(104,macromedia.com/),
(105,amazon.de/),
(106,time.com/),
(107,weibo.com/),
(108,hatena.ne.jp/),
(109,elegantthemes.com/),
(110,cdc.gov/),
(111,www.gov.uk/),
(112,constantcontact.com/),
(113,google.it/),
(114,npr.org/),
(115,aol.com/),
(116,harvard.edu/),
(117,namejet.com/),
(118,tripadvisor.com/),
(119,51.la/),
(120,webs.com/),
(121,xing.com/),
(122,latimes.com/),
(123,medium.com/),
(124,blogspot.co.uk/),
(125,bbb.org/),
(126,icio.us/),
(127,list-manage.com/),
(128,live.com/),
(129,apache.org/),
(130,opera.com/),
(131,amazon.co.jp/),
(132,bandcamp.com/),
(133,dailymotion.com/),
(134,bbc.com/),
(135,taobao.com/),
(136,businessinsider.com/),
(137,vkontakte.ru/),
(138,gnu.org/),
(139,mit.edu/),
(140,behance.net/),
(141,rambler.ru/),
(142,disqus.com/),
(143,surveymonkey.com/),
(144,guardian.co.uk/),
(145,google.es/),
(146,github.io/),
(147,joomla.org/),
(148,wired.com/),
(149,stanford.edu/),
(150,1und1.de/),
(151,kickstarter.com/),
(152,spotify.com/),
(153,google.fr/),
(154,nasa.gov/),
(155,goodreads.com/),
(156,ted.com/),
(157,independent.co.uk/),
(158,domainactive.co/),
(159,googleusercontent.com/),
(160,delicious.com/),
(161,imgur.com/),
(162,google.ca/),
(163,geocities.com/),
(164,cnet.com/),
(165,photobucket.com/),
(166,homestead.com/),
(167,scribd.com/),
(168,rakuten.co.jp/),
(169,line.me/),
(170,deviantart.com/),
(171,one.com/),
(172,themeforest.net/),
(173,tripod.com/),
(174,ca.gov/),
(175,domainname.de/),
(176,beian.gov.cn/),
(177,wiley.com/),
(178,un.org/),
(179,who.int/),
(180,pbs.org/),
(181,barnesandnoble.com/),
(182,nationalgeographic.com/),
(183,buzzfeed.com/),
(184,theatlantic.com/),
(185,domainretailing.com/),
(186,shopify.com/),
(187,cbsnews.com/),
(188,sina.com.cn/),
(189,foxnews.com/),
(190,networksolutions.com/),
(191,blogspot.com.es/),
(192,webmd.com/),
(193,nature.com/),
(194,techcrunch.com/),
(195,sakura.ne.jp/),
(196,berkeley.edu/),
(197,php.net/),
(198,ibm.com/),
(199,cloudfront.net/),
(200,mashable.com/),
(201,trustpilot.com/),
(202,plesk.com/),
(203,sciencedirect.com/),
(204,getpocket.com/),
(205,booking.com/),
(206,nbcnews.com/),
(207,cornell.edu/),
(208,whitehouse.gov/),
(209,usda.gov/),
(210,squarespace.com/),
(211,skype.com/),
(212,wp.me/),
(213,change.org/),
(214,secureserver.net/),
(215,cbc.ca/),
(216,a8.net/),
(217,ft.com/),
(218,noaa.gov/),
(219,hostnet.nl/),
(220,meetup.com/),
(221,epa.gov/),
(222,springer.com/),
(223,blogspot.ca/),
(224,blogspot.de/),
(225,nps.gov/),
(226,jiathis.com/),
(227,ow.ly/),
(228,wikia.com/),
(229,myshopify.com/),
(230,phoca.cz/),
(231,naver.com/),
(232,domraider.io/),
(233,usnews.com/),
(234,mapquest.com/),
(235,enable-javascript.com/),
(236,cnbc.com/),
(237,google.nl/),
(238,foursquare.com/),
(239,phpbb.com/),
(240,loc.gov/),
(241,economist.com/),
(242,uol.com.br/),
(243,google.com.br/),
(244,fda.gov/),
(245,wufoo.com/),
(246,spiegel.de/),
(247,chicagotribune.com/),
(248,irs.gov/),
(249,sfgate.com/),
(250,bigcartel.com/),
(251,newyorker.com/),
(252,list-manage1.com/),
(253,bizjournals.com/),
(254,4.cn/),
(255,abc.net.au/),
(256,prnewswire.com/),
(257,slate.com/),
(258,cbslocal.com/),
(259,hp.com/),
(260,umblr.com/),
(261,geocities.jp/),
(262,gizmodo.com/),
(263,dribbble.com/),
(264,marriott.com/),
(265,ed.gov/),
(266,whatsapp.com/),
(267,livedoor.jp/),
(268,doi.org/),
(269,163.com/),
(270,engadget.com/),
(271,nydailynews.com/),
(272,telegram.me/),
(273,vice.com/),
(274,about.me/),
(275,fb.com/),
(276,google.com.au/),
(277,state.gov/),
(278,fortune.com/),
(279,storify.com/),
(280,clickbank.net/),
(281,umich.edu/),
(282,ok.ru/),
(283,houzz.com/),
(284,themegrill.com/),
(285,mijndomein.nl/),
(286,unesco.org/),
(287,1and1.com/),
(288,nifty.com/),
(289,histats.com/),
(290,globo.com/),
(291,house.gov/),
(292,loopia.se/),
(293,loopia.com/),
(294,visma.com/),
(295,1and1.fr/),
(296,indiegogo.com/),
(297,columbia.edu/),
(298,yale.edu/),
(299,rs6.net/),
(300,linksynergy.com/),
(301,ocn.ne.jp/),
(302,wunderground.com/),
(303,google.pl/),
(304,academia.edu/),
(305,theverge.com/),
(306,sciencedaily.com/),
(307,debian.org/),
(308,washington.edu/),
(309,hilton.com/),
(310,weather.com/),
(311,gofundme.com/),
(312,upenn.edu/),
(313,aboutcookies.org/),
(314,biglobe.ne.jp/),
(315,businessweek.com/),
(316,fb.me/),
(317,feedly.com/),
(318,goo.ne.jp/),
(319,blogspot.in/),
(320,psychologytoday.com/),
(321,dreamhost.com/),
(322,ustream.tv/),
(323,samsung.com/),
(324,nypost.com/),
(325,oracle.com/),
(326,indiatimes.com/),
(327,elpais.com/),
(328,marketwatch.com/),
(329,senate.gov/),
(330,android.com/),
(331,fastcompany.com/),
(332,wikihow.com/),
(333,scientificamerican.com/),
(334,home.pl/),
(335,thetimes.co.uk/),
(336,theglobeandmail.com/),
(337,studiopress.com/),
(338,mailchimp.com/),
(339,tucowsdomains.com/),
(340,zdnet.com/),
(341,athemes.com/),
(342,sagepub.com/),
(343,xinhuanet.com/),
(344,fbcdn.net/),
(345,oup.com/),
(346,smh.com.au/),
(347,businesswire.com/),
(348,ucla.edu/),
(349,cdbaby.com/),
(350,umn.edu/),
(351,wisc.edu/),
(352,ftc.gov/),
(353,drupal.org/),
(354,sedo.com/),
(355,psu.edu/),
(356,entrepreneur.com/),
(357,researchgate.net/),
(358,ox.ac.uk/),
(359,uk2.net/),
(360,utexas.edu/),
(361,hbr.org/),
(362,inc.com/),
(363,tripadvisor.co.uk/),
(364,sciencemag.org/),
(365,youronlinechoices.com/),
(366,google.co.in/),
(367,exblog.jp/),
(368,directdomains.com/),
(369,quora.com/),
(370,mozilla.com/),
(371,walmart.com/),
(372,shinystat.com/),
(373,newsweek.com/),
(374,cryoutcreations.eu/),
(375,shareasale.com/),
(376,mirror.co.uk/),
(377,prweb.com/),
(378,worldbank.org/),
(379,allaboutcookies.org/),
(380,si.edu/),
(381,tandfonline.com/),
(382,jugem.jp/),
(383,census.gov/),
(384,target.com/),
(385,rollingstone.com/),
(386,usgs.gov/),
(387,nazwa.pl/),
(388,stackoverflow.com/),
(389,liveinternet.ru/),
(390,nymag.com/),
(391,princeton.edu/),
(392,t.me/),
(393,arstechnica.com/),
(394,hubspot.com/),
(395,networkadvertising.org/),
(396,intel.com/),
(397,politico.com/),
(398,lemonde.fr/),
(399,mysql.com/),
(400,amazon.fr/),
(401,seesaa.net/),
(402,archives.gov/),
(403,campaign-archive1.com/),
(404,sogou.com/),
(405,cam.ac.uk/),
(406,youku.com/),
(407,cisco.com/),
(408,alexa.com/),
(409,campaign-archive2.com/),
(410,hibu.com/),
(411,nyu.edu/),
(412,smugmug.com/),
(413,hhs.gov/),
(414,alibaba.com/),
(415,hollywoodreporter.com/),
(416,zendesk.com/),
(417,presscustomizr.com/),
(418,accuweather.com/),
(419,google.ru/),
(420,example.com/),
(421,box.com/),
(422,hostgator.com/),
(423,office.com/),
(424,shop-pro.jp/),
(425,uchicago.edu/),
(426,nhk.or.jp/),
(427,admin.ch/),
(428,ebay.co.uk/),
(429,variety.com/),
(430,bls.gov/),
(431,teamviewer.com/),
(432,netflix.com/),
(433,bmj.com/),
(434,oxfordjournals.org/),
(435,eventbrite.co.uk/),
(436,usc.edu/),
(437,colorlib.com/),
(438,oecd.org/),
(439,redcross.org/),
(440,list-manage2.com/),
(441,wsimg.com/),
(442,va.gov/),
(443,domainnameshop.com/),
(444,ap.org/),
(445,cmu.edu/),
(446,apa.org/),
(447,istockphoto.com/),
(448,t-online.de/),
(449,mlb.com/),
(450,prestashop.com/),
(451,www.nhs.uk/),
(452,xiti.com/),
(453,dropboxusercontent.com/),
(454,twitch.tv/),
(455,ieee.org/),
(456,opensource.org/),
(457,domeneshop.no/),
(458,blogspot.jp/),
(459,cafepress.com/),
(460,22.cn/),
(461,dell.com/),
(462,icann.org/),
(463,zenfolio.com/),
(464,vox.com/),
(465,livestream.com/),
(466,staticflickr.com/),
(467,openstreetmap.org/),
(468,nginx.org/),
(469,qz.com/),
(470,dot.gov/),
(471,usa.gov/),
(472,nsw.gov.au/),
(473,unc.edu/),
(474,google.ch/),
(475,acquirethisname.com/),
(476,umd.edu/),
(477,hud.gov/),
(478,adweek.com/),
(479,thehill.com/),
(480,att.com/),
(481,purdue.edu/),
(482,fao.org/),
(483,com.com/),
(484,state.tx.us/),
(485,woocommerce.com/),
(486,army.mil/),
(487,ewebdevelopment.com/),
(488,venturebeat.com/),
(489,steampowered.com/),
(490,duke.edu/),
(491,1688.com/),
(492,today.com/),
(493,mtv.com/),
(494,enom.com/),
(495,justgiving.com/),
(496,fotolia.com/),
(497,symantec.com/),
(498,dictionary.com/),
(499,sun.com/),
(500,netscape.com/);