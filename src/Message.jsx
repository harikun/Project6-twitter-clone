import React, { Component } from 'react'
import MessageContent from './Message/MessageContent'
import MessageHeader from './Message/MessageHeader'
import SearchField from './Message/SearchField'

export class Message extends Component {
  state = {
    isipesan: [
      {id: 11, name: "Prima", akun: "@pts", pesan: "iya konten sarkasme"},
      {id: 12, name: "Nadia Zhuk", akun: "@beetlehope", pesan: "You are welcome"},
      {id: 13, name: "Hello !", akun: "@botnyahari", pesan: "akun autobase berhasil dibuat"},
      {id: 14, name: "Nullable", akun: "@kzu404", pesan: "saya pake ini sih cron-job.org/en/"},
      {id: 15, name: "Dicoding", akun: "@dicoding", pesan: "Masukkan kode promo MEMBERLOYAL"},
    ]
  }
  render() {
    return (
      <div>
        <MessageHeader />
        <SearchField />
        <MessageContent pesan={this.state.isipesan} />
      </div>
    )
  }
}

export default Message
