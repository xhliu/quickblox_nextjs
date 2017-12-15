import React from 'react'
import Link from 'next/link'
// import QB from '../bower_components/quickblox/quickblox.min'

// const CREDENTIALS = {
//   appId: 65950,
//   authKey: 'dzzgACdfghpw8AG',
//   authSecret: '8xDksQXGYFDXyn5'
// };

export default class extends React.Component {
  static async getInitialProps () { 
    return {data: 'hello'}
  }

  render() {
    // console.log(QB.version)
    // var params = {login: 'bar', password: 'webAppPass'}
    // QB.createSession(params, function(err, res) {
    //   if (res) {
    //     console.log(res)
    //   } else {
    //     console.log('err');
    //   }
    // })
    if(!process.browser) {
      console.log('xxxxxx')
    } else {
      console.log('yyyyyy')
    }
    return <ul>
    <li><Link href='/b' as='/a'><a>{this.props.data}</a></Link></li>
    <li><Link href='/a' as='/b'><a>b</a></Link></li>
  </ul>
  }
}