import { Checkbox, IconButton } from '@material-ui/core'
import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  Inbox,
  KeyboardHide,
  LocalOffer,
  MoreVert,
  People,
  Redo,
  Settings
} from '@material-ui/icons'
import React from 'react'
import './EmailList.css'

import EmailRow from './EmailRow'
import Section from './Section'

function EmailList() {
  return (
    <div className="emailList">
      <div className="emailList__setting">
        <div className="emailList__setting_left">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="emailList__setting_right">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>

      <div className="emailList__sections">
        <Section Icon={Inbox} title="Primary" color="red" selected />
        <Section Icon={People} title="Social" color="#1A73EB" />
        <Section Icon={LocalOffer} title="Promotions" color="green" />
      </div>

      <div className="emailList__list">
        <EmailRow title="Twitch" subject="Hey fellow streamer!!!" description="This is a test" time="9:38AM" />
        <EmailRow title="Twitch" subject="Hey fellow streamer!!!" description="This is a testto get to see ellipsis if it's actually working" time="9:38AM" />
      </div>
    </div>
  )
}

export default EmailList
