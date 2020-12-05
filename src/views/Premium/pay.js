// eslint-disable-next-line import/no-anonymous-default-export
export default ({method}, {user}) => {
    console.log(user)

    if (!user.meta.email) {
        return alert('이메일을 확인할 수 없어요! 다시 로그인해보세요!')
    }

    const {IMP} = window
    IMP.request_pay({
        pg: 'html5_inicis',
        pay_method: method,
        name: '치노봇 프리미엄',
        amount: 1500,
        buyer_email: user.meta.email,
        buyer_name: user.meta.id
    }, function (rsp) {
        if (rsp.success) {
            alert('결제되었습니다.')
        } else {
            alert('결제 실패: ' + rsp.error_msg)
        }
    })
}