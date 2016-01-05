//是否播放背景音乐状态
var musicStatus;
//是否播放音效状态
var effectStatus;
//屏幕大小
var winSize;

var HomeMenuLayer = cc.Layer.extend({
	ctor: function(){
		this._super();
		winSize = cc.director.getWinSize();
		//加载精灵帧缓存
		cc.spriteFrameCache.addSpritFrames(res_platform.texture_plist,res_platform.texture_res);
		//获取音乐音效状态 TODO可能是在本地存储
		musicStatus = cc.sys.localStorage.getItem(MUSIC_KEY);
        effectStatus = cc.sys.localStorage.getItem(EFFECT_KEY);
		
		//瓦片背景添加到这层上
		var bg = new cc.TMXTiledMap(res.red_bg_tmx);
		this.addChild(bg);
		//添加top部分
		var top = new cc.Sprite("#home-top.png");
		top.x = winSize.width / 2;
		top.y = winSize.height - top.getContentSize().height / 2;
        this.addChild(top);
		//添加end部分
		var end = new cc.Sprite("#home-end.png");
        end.x = winSize.width / 2;
        end.y = end.getContentSize().height / 2;
        this.addChild(end);
		
		// 开始菜单精灵
        var startSpriteNormal = new cc.Sprite("#button.start.png");
        var startSpriteSelected = new cc.Sprite("#button.start-on.png");
		var startMenuItem = new cc.MenuItemSprite(
			startSpriteNormal,
			startSpriteSelected,
			this.menuItemCallback,
			this
		);
		startMenuItem.setTag(HomeMenuActionTypes.MenuItemStart);
		
		 // 设置菜单精灵
        var settingSpriteNormal = new cc.Sprite("#button.setting.png");
        var settingSpriteSelected = new cc.Sprite("#button.setting-on.png");
        var settingMenuItem = new cc.MenuItemSprite(
            settingSpriteNormal,
            settingSpriteSelected,
            this.menuItemCallback, this);
        settingMenuItem.setTag(HomeMenuActionTypes.MenuItemSetting);
		
		// 帮助菜单精灵
        var helppriteNormal = new cc.Sprite("#button.help.png");
        var helpSpriteSelected = new cc.Sprite("#button.help-on.png");
        var helpMenuItem = new cc.MenuItemSprite(
            helppriteNormal,
            helpSpriteSelected,
            this.menuItemCallback, this);
        helpMenuItem.setTag(HomeMenuActionTypes.MenuItemHelp);
		
		//创建菜单
		var mu = new cc.Menu(startMenuItem, settingMenuItem, helpMenuItem);
		mu.x = winSize.width / 2;
        mu.y = winSize.height / 2;
		mu.alignItemsVerticallyWithPadding(10);
		
		//菜单添加到这层
		this.addChild(mu);
		return true;
	},
	menuItemCallback: function(sender){
		//播放音效
		if(effectStatus == BOOL.YES){
			cc.audioEngine.playEffect(res_platform.effectBlip);
		}
		//根据菜单标签判断点击的是那个菜单，创建对应的场景
		var tsc = null;
		switch (sender.tag) {
			case HomeMenuActionTypes.MenuItemStart:
				tsc = new cc.TransitionFade(1.0, new GamePlayScene());
                cc.log("StartCallback");
                break;
			case HomeMenuActionTypes.MenuItemHelp:
				tsc = new cc.TransitionFade(1.0, new HelpScene());
                cc.log("HelpCallback");
                break;
			case HomeMenuActionTypes.MenuItemSetting:
				tsc = new cc.TransitionFade(1.0, new SettingScene());
                cc.log("SettingCallback");
                break;
		}
		//判断创建的场景不为空时，进入这一场景
		if(tsc){
			cc.director.pushScene(tsc);
		}
	},
	//完全进入场景时 执行播放音乐，一般放在这里，防止画面还没进来音乐就响了
	onEnterTransitionDidFinish: function () {
	this._super();
        cc.log("HomeMenuLayer onEnterTransitionDidFinish");
        if (musicStatus == BOOL.YES) {
			//循环播放
            cc.audioEngine.playMusic(res_platform.musicHome, true);
        }
    },
	//开始退出此Layer时，会调用此方法
    onExitTransitionDidStart: function () {
        this._super();
        cc.log("HomeMenuLayer onExitTransitionDidStart");
        cc.audioEngine.stopMusic(res_platform.musicHome);
    },
	//退出时调用
	onExit: function () {
        this._super();
        cc.log("HomeMenuLayer onExit");
    }
});
var HomeScene = cc.Scene.extend(
	onEnter: function(){
		this._super();
		var layer = new HomeMenuLayer();
		this.addChild(layer);
	}
);