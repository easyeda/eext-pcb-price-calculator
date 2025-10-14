export function PcbPrice(): void {
	eda.sys_IFrame.openIFrame('/iframe/index.html', 1000, 600);
}

export function Debug(): void {
	eda.sys_IFrame.openIFrame('iframe/DEBUG/index.html', 500, 300);
}

// console.log(eda.sys_Storage.setExtensionUserConfig("测试项目一",1234)); 写入一次数据
// console.log(eda.sys_Storage.getExtensionAllUserConfigs()); 获得所有数据

// console.log(eda.sys_Storage.deleteExtensionUserConfig("测试项目一")); 删除一次数据
// console.log(eda.sys_Storage.clearExtensionAllUserConfigs()); 删除所有数据
