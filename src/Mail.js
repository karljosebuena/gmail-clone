import { IconButton } from '@material-ui/core'
import {
  ArrowBack,
  MoveToInbox,
  Error,
  Delete,
  Email,
  WatchLater,
  CheckCircle,
  LabelImportant,
  MoreVert,
  UnfoldMore,
  Print,
  ExitToApp
} from '@material-ui/icons'
import React from 'react'
import { useHistory } from 'react-router-dom'
import './Mail.css'

function Mail() {
  const history = useHistory();

  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mail__tools_left">
          <IconButton onClick={() => history.push("/")}>
            <ArrowBack />
          </IconButton>
          <IconButton>
            <MoveToInbox />
          </IconButton>
          <IconButton>
            <Error />
          </IconButton>
          <IconButton>
            <Delete />
          </IconButton>
          <IconButton>
            <Email />
          </IconButton>
          <IconButton>
            <WatchLater />
          </IconButton>
          <IconButton>
            <CheckCircle />
          </IconButton>
          <IconButton>
            <LabelImportant />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>

        <div className="mail__tools_right">
          <IconButton>
            <UnfoldMore />
          </IconButton>
          <IconButton>
            <Print />
          </IconButton>
          <IconButton>
            <ExitToApp />
          </IconButton>
        </div>
      </div>

      <div className="mail__body">
        <div className="mail__body_header">
          <h2>Subject</h2>
          <LabelImportant className="mail__body_header_important" />
          <p>Title</p>
          <p className="mail__body_header_time">2:41pm</p>
        </div>

        <div className="mail__body_message">
          <p>This is  a message</p>
        </div>
      </div>
    </div>
  )
}

export default Mail
