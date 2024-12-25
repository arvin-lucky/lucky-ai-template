import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*', // 指定搜索引擎 User-Agent 为 * 时的规则 (通配符 * 表示所有搜索引擎)
			// allow: '/', // 允许搜索引擎访问 所有页面
			disallow: '/', // 不允许搜索引擎访问 任何页面
		},
		sitemap: '', // 指定网站地图的 URL
	};
}
