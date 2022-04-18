import request from '@/utils/request'

const getHomeData = () => request.get('mobile/homepage/json')

const getToken = (data) => request.post('oauth/token',data)

const getFoodData = (data) => request.get('mobile/goods/list/paged',data)

export {
    getHomeData,
    getToken,
    getFoodData
}