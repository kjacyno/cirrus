const BASE_URL = 'https://f003.backblazeb2.com/file/cirrusmarekkowalczyk'

export const getImageList = async () => {
    try {
        const response = await fetch('/projects-gallery.json')
        const data = await response.json()

        return data.map((item) => {
            const mainImg = `${BASE_URL}/${item.img}`
            const imgGallery =
                (item.gallery && item.folder)
                    ? item.gallery.map(
                          (filename) =>
                              `${BASE_URL}/selected-image/${item.folder}/${filename}`
                      )
                    : [mainImg]
            return { ...item, img: mainImg, gallery: imgGallery }
        })
    } catch (error) {
        console.error('Failed to fetch images:', error)
        return []
    }
}
