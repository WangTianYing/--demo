import {request} from './request';

// 传入cmsMeetingId,查询CmsMeeting信息
export const getCmsMeeting = ({}) => {
  return request('/biz/cmsMeeting/findById', 'GET', {})
};

// 增加浏览量 
export const addViewNum = ({ articleId }) => {
  return request('/api/cmsArticle/addViewNum', 'POST', { articleId })
};



