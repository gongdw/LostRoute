/**
 * Created by gdw 2016/1/4.
 */

// Home�˵�������ʶ
HomeMenuActionTypes = {
    MenuItemStart: 100,
    MenuItemSetting: 101,
    MenuItemHelp: 102
};

//�����������
EnemyTypes = {
    Enemy_Stone: 0,//��ʯ
    Enemy_1: 1,//�л�1
    Enemy_2: 2,//�л�2
    Enemy_Planet: 3 //����
};

//����������� Ҳ�ǵ��˾���֡������
EnemyName = {
    Enemy_Stone: "gameplay.stone1.png",
    Enemy_1: "gameplay.enemy-1.png",
    Enemy_2: "gameplay.enemy-2.png",
    Enemy_Planet: "gameplay.enemy.planet.png"
};

//��Ϸ������ʹ�õı�ǩ����
GameSceneNodeTag = {
    StatusBarFighterNode: 301,
    StatusBarLifeNode: 302,
    StatusBarScore: 303,
    BatchBackground: 800,
    Fighter: 900,
    ExplosionParticleSystem: 901,
    Bullet: 100,
    Enemy: 700
};

//�����ٶȳ���
Sprite_Velocity = {
    Enemy_Stone: cc.p(0, -300),
    Enemy_1: cc.p(0, -80),
    Enemy_2: cc.p(0, -100),
    Enemy_Planet: cc.p(0, -50),
    Bullet: cc.p(0, 300)
};

//��Ϸ����
EnemyScores = {
    Enemy_Stone:5,
    Enemy_1:10,
    Enemy_2:15,
    Enemy_Planet:20
};

//���˳�ʼ����ֵ
Enemy_initialHitPoints = {
    Enemy_Stone:3,
    Enemy_1:5,
    Enemy_2:15,
    Enemy_Planet:20
};

//�ҷ��ɻ�������
Fighter_hitPoints = 5;

//��ײ����
Collision_Type = {
    Enemy: 1,
    Fighter: 1,
    Bullet: 1
};

//������Ч״̬��
EFFECT_KEY = "sound_key";
//��������״̬��
MUSIC_KEY  = "music_key";
//������߷ּ�¼��
HIGHSCORE_KEY = "highscore_key";

//�Զ���Ĳ�������
BOOL = {
	NO:"0",
	YES:"1"
}

