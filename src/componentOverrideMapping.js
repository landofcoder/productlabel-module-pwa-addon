/**
 * Mappings for overwrites
 * example: [`@magento/venia-ui/lib/components/Main/main.js`]: './lib/components/Main/main.js'
 */
module.exports = componentOverride = {
	[`@magento/venia-ui/lib/components/ProductFullDetail/productFullDetail.js`]: '@landofcoder/productlabel-module/src/override/productFullDetail.js',
	[`@magento/venia-ui/lib/components/ProductImageCarousel/carousel.js`]: '@landofcoder/productlabel-module/src/override/carousel.js',
	[`@magento/venia-ui/lib/components/Gallery/item.js`]: '@landofcoder/productlabel-module/src/override/item.js',
	[`@magento/venia-ui/lib/RootComponents/Category/category.js`]: '@landofcoder/productlabel-module/src/override/RootComponents/Category/category.js',
	[`@magento/venia-ui/lib/RootComponents/Product/product.js`]: '@landofcoder/productlabel-module/src/override/RootComponents/Product/product.js',
};
