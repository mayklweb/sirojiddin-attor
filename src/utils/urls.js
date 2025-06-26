export const bannerList = '/banner'
export const categoryList = '/category'
export const discountList = '/discount'
export const setsList = '/sets'
export const menCollectionsList = '/collections'
export const menProductsList = '/product'
export const productsFilter = (id) => `products?collection_id=${id}`
export const productWithSlug = (slug) => `/products?slug=${slug}`
