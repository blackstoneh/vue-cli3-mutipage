const fs = require("fs")
const glob = require('glob')
const path = require('path')
const PAGES_PATH = path.resolve(__dirname, './src/pages')

const pages = {}
glob.sync(PAGES_PATH + '/*/index.js').forEach(filepath => {
  const pageName = path.basename(path.dirname(filepath))
  pages[pageName] = {
		entry: filepath,
		template: path.dirname(filepath) + '/index.html',
		filename: pageName+'.html',
		chunks: ['chunk-vendors', 'chunk-common', pageName]
	}
})

const publicPathChecked={"production":"","development":"","test":""}

module.exports = {
	pages,	
  devServer: {
      port: 9999, // ¶Ë¿ÚºÅ
  },
  publicPath: publicPathChecked[process.env.NODE_ENV]
}
