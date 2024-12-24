// // PhysicsEngine.js
// import Matter from 'matter-js';

// class PhysicsEngine {
//   constructor() {
//     this.navclosedPos = -30;
//     this.navHeight = 50;
//     this.canvasWidth = 500;
//     this.canvasHeight = 600;
//     this.initWorld();
//   }

//   initWorld() {
//     const engine = Matter.Engine.create();
//     const render = Matter.Render.create({
//       element: document.body,
//       engine: engine,
//     });

//     let bodies = this.createBodies();
//     let constraints = this.createConstraints();
//     Matter.World.add(engine.world, [...bodies, ...constraints]);

//     Matter.Engine.run(engine);
//     Matter.Render.run(render);
//   }

//   createBodies() {
//     this.nav = Matter.Bodies.rectangle(this.canvasWidth / 2, this.navclosedPos, this.canvasWidth, this.navHeight, { isSensor: true, inertia: Infinity, mass: 0.1 });
//     this.rope = this.createRope();
//     this.handle = this.rope.bodies[this.rope.bodies.length - 1];
//     return [this.nav, this.rope];
//   }

//   createRope() {
//     const ropeParts = Matter.Body.nextGroup(true);
//     const rope = Matter.Composites.stack(this.canvasWidth / 2, this.navclosedPos, 8, 1, -30, 0, (x, y) => {
//       return Matter.Bodies.circle(x, y, 15, {
//         collisionFilter: { group: ropeParts },
//       });
//     });

//     Matter.Composites.chain(rope, 0, 0.2, 0, -0.2, { stiffness: 1, damping: 0.6, length: 3 });
//     return rope;
//   }

//   createConstraints() {
//     this.fixMenuToTop = Matter.Constraint.create({
//       bodyA: this.nav,
//       pointA: { x: 0, y: this.navHeight / 2 },
//       pointB: { x: this.canvasWidth / 2, y: this.navclosedPos },
//       stiffness: 0.5,
//       damping: 0.1,
//       length: 0,
//     });

//     this.fixMenuToBottom = Matter.Constraint.create({
//       bodyA: this.nav,
//       pointA: { x: 0, y: this.navHeight / 2 },
//       pointB: { x: this.canvasWidth / 2, y: 0 },
//       stiffness: 0.01,
//       damping: 0.1,
//       length: 0,
//     });

//     const fixRopeToMenu = Matter.Constraint.create({
//       bodyA: this.nav,
//       pointA: { x: 0, y: this.navHeight - 20 },
//       bodyB: this.rope.bodies[0],
//       stiffness: 1,
//       length: 0,
//     });

//     this.fixMouseToHandle = Matter.Constraint.create({
//       bodyA: this.handle,
//       pointB: { x: 0, y: 0 },
//       stiffness: 0.000000000000001,
//       length: 0,
//     });

//     return [this.fixMenuToTop, this.fixMenuToBottom, fixRopeToMenu, this.fixMouseToHandle];
//   }

//   grabHandle(x, y) {
//     this.moveHandle(x, y);
//     this.fixMouseToHandle.stiffness = 1;
//   }

//   moveHandle(x, y) {
//     this.fixMouseToHandle.pointB.x = x;
//     this.fixMouseToHandle.pointB.y = y;
//   }

//   releaseHandle() {
//     this.fixMouseToHandle.stiffness = 0.000000000000001;
//   }
// }

// export default PhysicsEngine;
