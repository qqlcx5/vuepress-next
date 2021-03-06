const setFrontmatter = require('./setFrontmatter')
const { createPage, deletePage } = require('./handlePage')

// 生成分类标签等数据
function useFrontmatter(sourceDir, themeConfig) {
    // sourceDir themeConfig 存在第一次未传入值情况
    if (!sourceDir || !themeConfig) return

    // 所有.md文件设置frontmatter(标题、日期)
    setFrontmatter(sourceDir, themeConfig)

    // 创建分类页文件
    if (themeConfig.category !== false) {
        createPage(sourceDir, 'categoriesPage')
    } else {
        deletePage(sourceDir, 'categoriesPage')
    }

    // 创建标签页文件
    if (themeConfig.tag !== false) {
        createPage(sourceDir, 'tagsPage')
    } else {
        deletePage(sourceDir, 'tagsPage')
    }

    // 创建归档页文件
    if (themeConfig.archive !== false) {
        createPage(sourceDir, 'archivesPage')
    } else {
        deletePage(sourceDir, 'archivesPage')
    }
}

module.exports = useFrontmatter
