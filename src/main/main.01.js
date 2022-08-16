import * as THREE from "three";
// console.log(THREE);


//目标：了解three.js 最基本的内容

/** 1. 创建场景 */
const scene = new THREE.Scene();

/** 2. 创建相机
 * 透视相机(PerspectiveCamera): 这一投影模式被用来模拟人眼所看到的景象，它是3D场景的渲染中使用得最普遍的投影模式。
 * PerspectiveCamera( fov : Number, aspect : Number, near : Number, far : Number )
 * fov — 摄像机视锥体垂直视野角度 75
 * aspect — 摄像机视锥体长宽比
 * near — 摄像机视锥体近端面 0.1
 * far — 摄像机视锥体远端面 1000
 **/

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100); // 透视相机
// 设置相机的位置 x轴 y轴 z轴
camera.position.set(0, 0, 10);
// 场景中添加相机
scene.add(camera);
/** 3. 添加物体 */
/** 创建几何体
 * 立方缓冲几何体（BoxGeometry）
 * BoxGeometry是四边形的原始几何类，它通常使用构造函数所提供的“width”、“height”、“depth”参数来创建立方体或者不规则四边形。
 * */
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
/** 基础网格材质(MeshBasicMaterial)
 * 一个以简单着色（平面或线框）方式来绘制几何体的材质。
 **/
const cubMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
/**
 * 根据几何体和材质创建物体
 * 网格（Mesh）
 * 表示基于以三角形为polygon mesh（多边形网格）的物体的类。 同时也作为其他类的基类，例如SkinnedMesh。
 **/
const cube = new THREE.Mesh(cubeGeometry, cubMaterial);
// 将几何体添加到场景中
scene.add(cube);

/** 创建渲染器/初始化渲染器 */ 
const renderer = new THREE.WebGLRenderer();
// 设置渲染的尺寸大小
renderer.setSize(window.innerWidth, window.innerHeight);
// 将webgl渲染到的canvas内容添加到body
document.body.appendChild(renderer.domElement);
// 使用渲染器，通过相机将场景渲染进来
renderer.render(scene, camera);

