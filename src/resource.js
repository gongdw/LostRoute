var res = {
	  loading_jpg : "res/loading/loading.jpg",
    //��Ƭ��ͼʹ�õ�ͼƬ
    red_tiles_png: "res/map/redTiles.png",
    blue_tiles_png: "res/map/blueTiles.png",
    // ����plist
    explosion_plist: "res/particle/explosion.plist",
    fire_plist: "res/particle/fire.plist",
    light_plist: "res/particle/light.plist",
    //tmx
    blue_bg_tmx: "res/map/blueBg.tmx",
    red_bg_tmx: "res/map/redBg.tmx",
    play_bg_tmx: "res/map/playBg.tmx",
    //����
    BMFont_png: "res/fonts/BMFont.png",
    BMFont_fnt: "res/fonts/BMFont.fnt"
    
};
//����iOSƽ̨
var res_NativeiOS = {
    //texture��Դ
	texture_res: 'res/texture/LostRoutes_Texture.pvr.gz',
    //plist
	texture_plist: 'res/texture/LostRoutes_Texture_pvr.plist',
    //music
    musicGame: "res/sound/gameBg.aifc",
    musicHome: "res/sound/homeBg.aifc",
    //effect
    effectExplosion: "res/sound/Explosion.caf",
    effectBlip: "res/sound/Blip.caf"
};

//����ƽ̨����Web��Android��
var res_Other = {
    //texture��Դ
	texture_res: 'res/texture/LostRoutes_Texture.png',
    //plist
	texture_plist: 'res/texture/LostRoutes_Texture.plist',
    //music
    musicGame: "res/sound/gameBg.mp3",
    musicHome: "res/sound/homeBg.mp3",
    //effect
    effectExplosion: "res/sound/Explosion.wav",
    effectBlip: "res/sound/Blip.wav"
};
var g_resources = [];

if (cc.sys.os == cc.sys.OS_IOS) {
    res_platform = res_NativeiOS;
} else {
    res_platform = res_Other;
}
//������Դ
for (var i in res) {
    g_resources.push(res[i]);
}

//�����ض�ƽ̨��Դ
for (var i in res_platform) {
    g_resources.push(res_platform[i]);
}
