require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
	siteMetadata: {
		title: `Shopify Gatsby Example`,
		description: `Simple example of an e-commerce site with Gatsby and Shopify`,
		author: `Muhammed Ismail`
	},
	plugins: [
		{
			resolve: `gatsby-source-shopify`,
			options: {
				// The domain name of your Shopify shop.
				shopName: process.env.SHOP_NAME,
				// The storefront access token
				accessToken: process.env.SHOP_TOKEN
			}
		},
		{
			resolve: `gatsby-plugin-env-variables`,
			options: {
				allowList: [ 'SHOP_NAME', 'SHOP_TOKEN' ]
			}
		},
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
			}
		}
	]
}
