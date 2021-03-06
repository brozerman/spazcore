/*jslint 
browser: true,
nomen: false,
debug: true,
forin: true,
undef: true,
white: false,
onevar: false 
 */
var sc;

/**
 * A library to shorten text 
 */


function SpazShortText() {

	this.map = {};
		
	this.genBaseMaps();
	this.processBaseMaps();

	
}



/**
 * internal function to generate the default long -> short maps 
 */
SpazShortText.prototype.genBaseMaps = function() {
	
	this.basemap = {
		
		/*
			txtspeak type stuff
		*/
		'about'                 :'abt',
		'account'               :'acct',
		'address'               :'addy',
		'anyone'				:'ne1',
		'and'                   :'&',
		'at'					:'@',
		'at the moment'         :'atm',
		'back'					:'bk',
		'be right back' 	    :'brb',
		'be back later' 	    :'bbl',
		'be back soon' 		    :'bbs',
		'because' 			    :'b/c',
		'boyfriend'			    :'bf',
		'but'					:'but',
		'girlfriend'		    :'gf',
		'between'			    :'b/t',
		'by the way'		    :'btw',
		'definitely'		    :'def',
		'everyone'				:'evr1',
		'favorite'				:'fav',
		'for'					:'fr',
		'from'					:'frm',
		'for example'			:'Fr ex',
		'follow'				:'fllw',
		'follower'				:'fllwr',
		'followers'				:'fllwrs',
		'following'				:'fllwng',
		'good'					:'gd',
		'got'					:'gt',
		'having'				:'hvg',
		'hours'					:'hrs',
		'i don\'t know'		    :'idk',
		'if i recall correctly' :'iirc',
		'in my opinion'		    :'imo',
		'in my humble opinion'  :'imho',
		'just'					:'jst',
		'little'				:'lttl',
		'love'				    :'<3',
		'message'			    :'msg',
		'midnight'				:'12am',
		'never mind'		    :'nm',
		'no problem'		    :'np',
		'not much'			    :'nm',
		'pages'					:'pgs',
		'pictures'			    :'pics',
		'obviously'			    :'obvs',
		'please'			    :'pls',
		'seriously'			    :'srsly',
		'something'			    :'s/t',
		'sorry'				    :'sry',
		'text'				    :'txt',
		'thanks'			    :'thx',
		'think'				    :'thk',
		'to be honest'		    :'tbh',
		'though'				:'tho',
		'through'				:'thru',
		'weeks'					:'wks',
		'with'					:'w',
		'without'				:'w/o',
		
		'that'			:'tht',
		'what'			:'wht',
		'have'			:'hv',
		'don\'t'			:'dnt',
		'was'			:'ws',
		'well'			:'wll',
		'right'			:'rt',
		'here'			:'hr',
		'going'			:'gng',
		'like'			:'lk',
		'can'			:'cn',
		'want'			:'wnt',
		'that\'s'			:'thts',
		'there'			:'thr',
		'come'			:'cme',
		'really'			:'rly',
		'would'			:'wld',
		'look'			:'lk',
		'when'			:'whn',
		'okay'			:'ok',
		'can\'t'			:'cnt',
		'tell'			:'tll',
		'I\'ll'			:'Ill',
		'could'			:'cl',
		'didn\'t'			:'ddnt',
		'yes'			:'y',
		'had'			:'hd',
		'then'			:'thn',
		'take'			:'tke',
		'make'			:'mk',
		'gonna'			:'gna',
		'never'			:'nvr',
		'them'			:'thm',
		'more'			:'mr',
		'over'			:'ovr',
		'where'			:'whr',
		'what\'s'			:'whts',
		'thing'			:'thg',
		'maybe'			:'mybe',
		'down'			:'dwn',
		'very'			:'very',
		'should'			:'shld',
		'anything'			:'nethg',
		'said'			:'sd',
		'any'			:'ne',
		'even'			:'evn',
		'thank'			:'thk',
		'give'			:'gve',
		'thought'			:'thot',
		'help'			:'hlp',
		'talk'			:'tlk',
		'people'			:'ppl',
		'find'			:'fnd',
		'nothing'			:'nthg',
		'again'			:'agn',
		'things'			:'thgs',
		'call'			:'cll',
		'told'			:'tld',
		'great'			:'grt',
		'before'			:'b4',
		'better'			:'bttr',
		'ever'			:'evr',
		'night'			:'nite',
		'than'			:'thn',
		'away'			:'awy',
		'first'			:'1st',
		'believe'			:'blve',
		'other'			:'othr',
		'everything'			:'evrythg',
		'work'			:'wrk',
		'fine'			:'fne',
		'home'			:'hme',
		'after'			:'aftr',
		'last'			:'lst',
		'keep'			:'kp',
		'around'			:'arnd',
		'stop'			:'stp',
		'long'			:'lng',
		'always'			:'alwys',
		'listen'			:'lstn',
		'wanted'			:'wntd',
		'happened'			:'hppnd',
		'won\'t'			:'wnt',
		'trying'			:'tryng',
		'kind'			:'knd',
		'wrong'			:'wrng',
		'talking'			:'tlkg',
		'being'			:'bng',
		'bad'			:'bd',
		'remember'			:'rmbr',
		'getting'			:'gttg',
		'together'			:'togthr',
		'mother'			:'mom',
		'understand'			:'undrstd',
		'wouldn\'t'			:'wldnt',
		'actually'			:'actly',
		'baby'			:'bby',
		'father'			:'dad',
		'done'			:'dne',
		'wasn\'t'			:'wsnt',
		'might'			:'mite',
		'every'			:'evry',
		'enough'			:'engh',
		'someone'			:'sm1',
		'family'			:'fmly',
		'whole'			:'whl',
		'another'			:'anthr',
		'jack'			:'jck',
		'yourself'			:'yrslf',
		'best'			:'bst',
		'must'			:'mst',
		'coming'			:'cmg',
		'looking'			:'lkg',
		'woman'			:'wmn',
		'which'			:'whch',
		'years'			:'yrs',
		'room'			:'rm',
		'left'			:'lft',
		'tonight'			:'2nte',
		'real'			:'rl',
		'hmm'			:'hm',
		'happy'			:'hpy',
		'pretty'			:'prty',
		'girl'			:'grl',
		'show'			:'shw',
		'friend'			:'frnd',
		'already'			:'alrdy',
		'saying'			:'syng',
		'next'			:'nxt',
		'job'			:'jb',
		'problem'			:'prblm',
		'minute'			:'min',
		'found'			:'fnd',
		'world'			:'wrld',
		'thinking'			:'thkg',
		'haven\'t'			:'hvnt',
		'heard'			:'hrd',
		'honey'			:'hny',
		'matter'			:'mttr',
		'myself'			:'myslf',
		'couldn\'t'			:'cldnt',
		'exactly'			:'xctly',
		'probably'			:'prob',
		'happen'			:'hppn',
		'we\'ve'			:'wve',
		'hurt'			:'hrt',
		'both'			:'bth',
		'gotta'			:'gtta',
		'alone'			:'alne',
		'excuse'			:'xcse',
		'start'			:'strt',
		'today'			:'2dy',
		'ready'			:'rdy',
		'until'			:'untl',
		'whatever'			:'wtevr',
		'wants'			:'wnts',
		'hold'			:'hld',
		'yet'			:'yt',
		'took'			:'tk',
		'once'			:'1ce',
		'gone'			:'gne',
		'called'			:'clld',
		'morning'			:'morn',
		'supposed'			:'sppsd',
		'friends'			:'frnds',
		'stuff'			:'stff',
		'most'			:'mst',
		'used'			:'usd',
		'worry'			:'wrry',
		'second'			:'2nd',
		'part'			:'prt',
		'truth'			:'trth',
		'school'			:'schl',
		'forget'			:'frgt',
		'business'			:'biz',
		'cause'			:'cuz',
		'telling'			:'tllg',
		'chance'			:'chnce',
		'move'			:'mv',
		'person'			:'prsn',
		'somebody'			:'smbdy',
		'heart'			:'hrt',
		'point'			:'pt',
		'later'			:'ltr',
		'making'			:'makg',
		'anyway'			:'nywy',
		'many'			:'mny',
		'phone'			:'phn',
		'reason'			:'rsn',
		'looks'			:'lks',
		'bring'			:'brng',
		'turn'			:'trn',
		'tomorrow'			:'tmrw',
		'trust'			:'trst',
		'check'			:'chk',
		'change'			:'chng',
		'anymore'			:'anymr',
		'town'			:'twn',
		'aren\'t'			:'rnt',
		'working'			:'wrkg',
		'year'			:'yr',
		'taking'			:'tkg',
		'means'			:'mns',
		'brother'			:'bro',
		'play'			:'ply',
		'hate'			:'h8',
		'says'			:'sez',
		'beautiful'			:'btfl',
		'crazy'			:'crzy',
		'party'			:'prty',
		'afraid'			:'afrd',
		'important'			:'imptnt',
		'rest'			:'rst',
		'word'			:'wrd',
		'watch'			:'wtch',
		'glad'			:'gld',
		'sister'			:'sistr',
		'minutes'			:'min',
		'everybody'			:'evrybdy',
		'couple'			:'cpl',
		'either'			:'ethr',
		'feeling'			:'flg',
		'under'			:'undr',
		'break'			:'brk',
		'promise'			:'prmse',
		'easy'			:'ez',
		'question'			:'q',
		'doctor'			:'doc',
		'walk'			:'wlk',
		'trouble'			:'trbl',
		'different'			:'diff',
		'hospital'			:'hsptl',
		'anybody'			:'anybdy',
		'wedding'			:'wddg',
		'perfect'			:'prfct',
		'police'			:'cops',
		'waiting'			:'wtng',
		'dinner'			:'din',
		'against'			:'agst',
		'funny'			:'fny',
		'husband'			:'hsbnd',
		'child'			:'kid',
		'shouldn\'t'			:'shldnt',
		'half'			:'1/2',
		'moment'			:'mmnt',
		'sleep'			:'slp',
		'started'			:'strtd',
		'young'			:'yng',
		'sounds'			:'snds',
		'lucky'			:'lky',
		'sometimes'			:'smtimes',
		'plan'			:'pln',
		'serious'			:'srs',
		'ahead'			:'ahd',
		'week'			:'wk',
		'wonderful'			:'wndfl',
		'past'			:'pst',
		'number'			:'#',
		'nobody'			:'nbdy',
		'along'			:'alng',
		'finally'			:'fnly',
		'worried'			:'wrrd',
		'book'			:'bk',
		'sort'			:'srt',
		'safe'			:'sfe',
		'living'			:'livg',
		'children'			:'kids',
		'weren\'t'			:'wrnt',
		'front'			:'frnt',
		'loved'			:'luvd',
		'asking'			:'askg',
		'running'			:'rnng',
		'clear'			:'clr',
		'figure'			:'fgr',
		'felt'			:'flt',
		'parents'			:'prnts',
		'absolutely'			:'abs',
		'alive'			:'alve',
		'meant'			:'mnt',
		'happens'			:'hppns',
		'kidding'			:'kddg',
		'full'			:'fl',
		'meeting'			:'mtg',
		'coffee'			:'cffe',
		'sound'			:'snd',
		'women'			:'wmn',
		'welcome'			:'wlcm',
		'months'			:'mnths',
		'hour'			:'hr',
		'speak'			:'spk',
		'thinks'			:'thks',
		'Christmas'			:'Xmas',
		'possible'			:'pssble',
		'worse'			:'wrs',
		'company'			:'co',
		'mistake'			:'mstk',
		'handle'			:'hndl',
		'spend'			:'spnd',
		'totally'			:'ttly',
		'giving'			:'gvg',
		'control'			:'ctrl',
		'realize'			:'rlze',
		'power'			:'pwr',
		'president'			:'pres',
		'girls'			:'grls',
		'taken'			:'tkn',
		'picture'			:'pic',
		'talked'			:'tlkd',
		'hundred'			:'hndrd',
		'changed'			:'chgd',
		'completely'		:'cmpltly', 
		'explain'			:'exp',
		'playing'			:'plyg',
		'relationship'			:'rlshp',
		'loves'			:'lvs',
		'fucking'			:'fkg',
		'anywhere'			:'newhr',
		'questions'			:'qs',
		'wonder'			:'wndr',
		'calling'			:'cllg',
		'somewhere'			:'smwhr',
		'straight'			:'str8',
		'fast'			:'fst',
		'words'			:'wrds',
		'worked'			:'wrkd',
		'light'			:'lite',
		'cannot'			:'can\'t',
		'protect'			:'prtct',
		'class'			:'cls',
		'surprise'			:'sprise',
		'sweetheart'			:'swthrt',
		'looked'			:'lkd',
		'except'			:'xcpt',
		'takes'			:'tks',
		'situation'			:'sitn',
		'besides'			:'bsds',
		'pull'			:'pll',
		'himself'			:'hmslf',
		'hasn\'t'			:'hsnt',
		'worth'			:'wrth',
		'amazing'			:'amzg',
		'given'			:'gvn',
		'expect'			:'xpct',
		'rather'			:'rthr',
		'black'			:'blk',
		'movie'			:'film',
		'country'			:'cntry',
		'perhaps'			:'prhps',
		'watching'			:'wtchg',
		'darling'			:'darlg',
		'honor'			:'hnr',
		'personal'			:'prsnl',
		'moving'			:'movg',
		'till'			:'til',
		'admit'			:'admt',
		'problems'			:'prbs',
		'information'			:'info',
		'honest'			:'hnst',
		'missed'			:'mssd',
		'longer'			:'lngr',
		'dollars'			:'$s',
		'evening'			:'eve',
		'starting'			:'strtg',
		'suppose'			:'spps',
		'street'			:'st',
		'sitting'			:'sttg',
		'favor'			:'fvr',
		'apartment'			:'apt',
		'court'			:'crt',
		'terrible'			:'trrbl',
		'clean'			:'cln',
		'learn'			:'lrn',
		'works'			:'wks',
		'relax'			:'rlx',
		'million'			:'mil',
		'prove'			:'prv',
		'smart'			:'smrt',
		'missing'			:'missg',
		'forgot'			:'frgt',
		'small'			:'sm',
		'interested'			:'intrstd',
		'table'			:'tbl',
		'become'			:'bcm',
		'pregnant'			:'preg',
		'middle'			:'mddl',
		'ring'			:'rng',
		'careful'			:'crfl',
		'figured'			:'fgrd',
		'stick'			:'stk',
		'stopped'			:'stppd',
		'standing'			:'stndg',
		'forgive'			:'frgv',
		'wearing'			:'wearg',
		'hoping'			:'hopg',
		'thousand'			:'k',
		'paper'			:'ppr',
		'tough'			:'tuff',
		'count'			:'cnt',
		'birthday'			:'bday',
		'history'			:'hstry',
		'share'			:'shr',
		'offer'			:'offr',
		'hurry'			:'hrry',
		'feet'			:'ft',
		'wondering'			:'wonderg',
		'building'			:'buildg',
		'ones'			:'1s',
		'finish'			:'fin',
		'would\'ve'			:'wldve',
		'interesting'			:'intrstg',
		'enjoy'			:'njoy',
		'road'			:'rd',
		'staying'			:'stayg',
		'short'			:'shrt',
		'finished'			:'fin',
		'respect'			:'rspct',
		'spent'			:'spnt',
		'attention'			:'attn',
		'holding'			:'hldg',
		'surprised'			:'srprsd',
		'keeping'			:'kpg',
		'putting'			:'puttg',
		'dark'			:'drk',
		'self'			:'slf',
		'using'			:'usg',
		'helping'			:'helpg',
		'normal'			:'nrml',
		'lawyer'			:'atty',
		'floor'			:'flr',
		'whether'			:'whthr',
		'everything\'s'			:'evrthg\'s',
		'present'			:'prsnt',
		'private'			:'priv',
		'cover'			:'cvr',
		'judge'			:'jdg',
		'upstairs'			:'upstrs',
		'mommy'			:'mom',
		'possibly'			:'pssbly',
		'worst'			:'wrst',
		
		
		/*
			contractions
		*/
		'I am'				:'I\'m',
		'I will'			:'I\'ll',
		'I had'				:'I\'d',
		'I would'			:'I\'d',
		'I have'			:'I\'ve',

		'You are'			:'You\'re',
		'You will'			:'You\'ll',
		'You had'			:'You\'d',
		'You would'			:'You\'d',
		'You have'			:'You\'ve',

		'He is'				:'He\'s',
		'He has'			:'He\'s',
		'He will'			:'He\'ll',
		'He had'			:'He\'d',
		'He would'			:'He\'d',

		'She is'			:'She\'s',
		'She has'			:'She\'s',
		'She will'			:'She\'ll',
		'She had'			:'She\'d',
		'She would'			:'She\'d',

		'It is'				:'It\'s',
		'It has'			:'It\'s',
		'It will'			:'It\'ll',
		'It would'			:'It\'d',
		'It had'			:'It\'d',

		'We are'			:'We\'re',
		'We will'			:'We\'ll',
		'We had'			:'We\'d',
		'We would'			:'We\'d',
		'We have'			:'We\'ve',

		'They are'			:'They\'re',
		'They will'			:'They\'ll',
		'They had'			:'They\'d',
		'They would'		:'They\'d',
		'They have'			:'They\'ve',

		'There is'			:'There\'s',
		'There has'			:'There\'s',
		'There will'		:'There\'ll',
		'There had'			:'There\'d',
		'There would'		:'There\'d',

		'That is'			:'That\'s',
		'That has'			:'That\'s',
		'That will'			:'That\'ll',
		'That had'			:'That\'d',
		'That would'		:'That\'d',
		
		'are not'			:'aren\'t',
		'can not'			:'can\'t',
		'could not'			:'couldn\'t',
		'did not'			:'didn\'t',
		'does not'			:'doesn\'t',
		'do not'			:'don\'t',
		'had not'			:'hadn\'t',
		'has not'			:'hasn\'t',
		'is not'			:'isn\'t',
		'must not'			:'mustn\'t',
		'need not'			:'needn\'t',
		'should not'		:'shouldn\'t',
		'was not'			:'wasn\'t',
		'were not'			:'weren\'t',
		'will not'			:'won\'t',
		'would not'			:'wouldn\'t',
		
		/*
			numbers
		*/
		'one'					:'1',
		'two'					:'2',
		'three'					:'3',
		'four'					:'4',
		'five'					:'5',
		'six'					:'6',
		'seven'					:'7',
		'eight'					:'8',
		'nine'					:'9',
		'ten'					:'10',
		'eleven'				:'11',
		'twelve'				:'12',
		'twenty'				:'20'
		
	};
	
	
	/*
		these mappings aren't to be altered at all when processed into regexes
	*/
	this.baserawmap = {
		'--'					:'–',
		'-\\s+'					:'-',
		'\\s+-'					:'-',
		'\\s+'					:' ',
		'\\s+$'					:'',  // trim right
		'^\\s+'					:'',  // trim left
		'\\s?\\.\\.\\.'				:'…',  // ellipses
		'\\.\\s+'				:'. ', // one space only after periods
		'\\.\\s*$'				:'',   // remove end period
		'RT:? @[a-z0-9_]+:? RT:? @([a-z0-9_]+):?' : 'RT @$1' //remove extra RTs
	};
};


/**
 * This processes the base maps into the this.map object of regexes and replacements 
 */
SpazShortText.prototype.processBaseMaps = function() {
	var key, val, regex, israw;
	
	for (key in this.basemap) {
		val = this.basemap[key];
		regex = new RegExp('(\\b)'+key+'(\\b)', 'gi');
		this.map[key] = {
			'short':'$1'+val+'$2',
			'regex':regex
		};
	}
	
	/*
		take the rawmap stuff and glob it into this.map, so we only have one to worry about
	*/
	for (key in this.baserawmap) {
		val = this.baserawmap[key];
		regex = new RegExp(key, 'gi');
		this.map[key] = {
			'short':val,
			'regex':regex
		};
	}
	
	
};


/**
 * shortens the given text according to the map
 * 
 * @param {string} text
 * @return {string} 
 */
SpazShortText.prototype.shorten = function(text) {
	
	for (var key in this.map) {
		var re = this.map[key].regex;
		var rp = this.map[key]["short"];
		text = text.replace(re, rp);
	}
	
	return text;
	
};


/**
 * this adds a new mapping to the basemaps and processes the base maps into regexes again
 * @param {string} search 
 * @param {string} replase
 * @param {boolean} israw is true, this mapping won't be altered at all when processed into a regex
 */
SpazShortText.prototype.addMap = function(search, replace, israw) {
	israw = israw || false;
	
	if (israw) {
		this.baserawmap[search] = replace;
	} else {
		this.basemap[search] = replace;
	}
	
	this.processBaseMaps();
};



/**
 * returns the map
 * @return {object} 
 */
SpazShortText.prototype.getMaps = function() {
	return this.map;
};