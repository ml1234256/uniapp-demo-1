'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	const res = await uniCloud.httpclient.request(
		'https://api.weixin.qq.com/sns/jscode2session?appid=wx4bf0f0a5c7bf8746&secret=1046262109d94ea56ff8023e564659e9&js_code='+event.code+'&grant_type=authorization_code',
		{ dataType:'json'},
	)
	//返回数据给客户端
	return res
};
