import { getUserInfo } from "./api";
import { Toast } from 'antd-mobile';

export function get_userInfo(self, url,getPageYy) {
    let { visitId, code, accessToken } = JSON.parse(localStorage.getItem("query") || '{}')||'{}';
    // if (!accessToken) {
    //     Toast.fail('获取用户信息失败', 1); return;
    // }
    self.setState({ isLoading: true })
    getUserInfo({ visitId, code, accessToken }).then((res) => {
        let data = res.data.userView;
        localStorage.setItem("user", JSON.stringify(data))
        localStorage.setItem('a', data.uniqueId)
        self.setState({ isLoading: false })
        if(typeof getPageYy == 'function'){
            getPageYy()
        }
        if (url) {
            self.props.history.push(url);
        }
    }).catch((err)=>{
        self.setState({ isLoading: false })
      });
};