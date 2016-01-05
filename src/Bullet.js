var Bullet = cc.PhysicsSprite.extend({
    space: null,           //所在物理空间
    velocity: 0,			//速度
	ctor: function (spriteFrameName, space) {
        this._super(spriteFrameName);
       // this.spriteFrameName = spriteFrameName;
        this.space = space;
		// TODO 创建刚体 第一个参数是质量，momentForBox:计算居中于刚体的实心矩形的转动惯量  第一个参数是质量
        this.body = new cp.Body(1, cp.momentForBox(1, this.getContentSize().width, this.getContentSize().height));
        //刚体添加到空间
		this.space.addBody(this.body);
		//根据刚体创建形状
        var shape = new cp.BoxShape(this.body, this.getContentSize().width, this.getContentSize().height);
        //设置摩擦力
		shape.setElasticity(0.5);
		//设置弹性
        shape.setFriction(0.5);
		//设置碰撞类型
        shape.setCollisionType(Collision_Type.Bullet);
		//形状添加到空间
        this.space.addShape(shape);
		//TODO
        this.setBody(this.body);
        this.body.data = this;
    },
	shootBulletFromFighter: function (p) {
    	this.body.data = this;
        this.body.setPos(p);
        this.scheduleUpdate();
    }, 
	update: function (dt) {
        //计算移动位置
        this.body.setPos(cc.p(this.body.getPos().x + this.velocity.x * dt, this.body.getPos().y + this.velocity.y * dt));
        //超出窗口，停止定时器、data置空、从父节点中删除
		if (this.body.getPos().y >= winSize.height) {
            this.unscheduleUpdate();
            this.body.data = null;
            this.removeFromParent();
        }
    },
	unuse: function () {
    	this.retain();//if in jsb
    	this.setVisible(false);
    },
	reuse: function (spriteFrameName, space) {
    	this.spriteFrameName = spriteFrameName;
    	this.space = space;
    	this.setVisible(true);
    }
});

//对像池创建对象的方法 ---gdw
Bullet.create = function(spriteFrameName, space){
	if(cc.pool.hasObject(Bullet)) {
		return cc.pool.getFromPool(Bullet, spriteFrameName, space);
	} else {
		return new Bullet(spriteFrameName, space);
	}

}