import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ReactPlayer from 'react-player'
import sample from 'lodash/sample'

import './MusicPlayer.less'
import Duration from './Duration'

const { arrayOf, shape, string } = PropTypes

@connect(
  ({ musicList }) => ({ musicList })
)
export default class MusicPlayer extends Component {
  static propTypes = {
    musicList: arrayOf(shape(
      {
        name: string.isRequired,
        url: string.isRequired,
        lrc_url: string,
        artists: string.isRequired,
        provider: string.isRequired
      }
    )).isRequired
  }

  state = {
    _music: null,
    showName: false,
    playing: true,
    volume: 0.8,
    played: 0,
    duration: 0
  }

  componentWillMount() {
    this.shuffle()
    setTimeout(() => {
      this.togglePlaying()
      setTimeout(() => {
        this.togglePlaying()
      }, 2000)
    }, 3000)
  }

  shuffle = () => {
    this.setState({
      _music: sample(this.props.musicList),
      playing: true,
      played: 0
    })
  }

  togglePlaying = () => {
    this.setState({
      playing: !this.state.playing
    })
  }

  toggleMuting = () => {
    this.setState({ volume: this.state.volume > 0.5 ? 0 : 1 })
  }

  toggleName = () => {
    this.setState({ showName: !this.state.showName })
  }

  render() {
    const { playing, volume, played, duration, showName, _music } = this.state

    const music = _music || sample(this.props.musicList)
    const musicName = `${music.name} - ${music.artists}`
    return (
      <div className="music-player m-player link">
        <ReactPlayer
          className="react-player"
          width={0}
          height={0}
          url={music.url}
          playing={playing}
          volume={volume}
          onStart={() => console.log('onStart')}
          onPlay={() => this.setState({ playing: true })}
          onPause={() => this.setState({ playing: false })}
          onDuration={d => this.setState({ duration: d })}
        />
        <a href={`http://music.163.com/#/search/m/?s=${musicName}`} target="_blank">
          <i className={playing ? 'faa-float animated fa fa-lg fa-music' : 'fa fa-lg fa-music'} />
        </a>
        <a onClick={this.togglePlaying}>
          <i className={!playing ? 'fa fa-play' : 'fa fa-pause'} />
        </a>
        <a onClick={this.shuffle}>
          <i className="fa fa-random" />
        </a>
        <a onClick={this.toggleMuting}>
          <i className={volume === 0 ? 'fa fa-volume-off' : 'fa fa-volume-up'} />
        </a>
        <a onClick={this.toggleName}>
          <Duration seconds={duration * (1 - played)} />
          <span className="music-name m-hide fx-fade-normal fx-dur-600 fx-ease-none">
            {showName ? musicName : ''}
          </span>
        </a>
      </div>
    )
  }
}
