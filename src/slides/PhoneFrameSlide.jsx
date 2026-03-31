import DeviceFrame, { deviceFrameScaleStyle } from '../components/DeviceFrame'
import MessengerChatMock from '../components/MessengerChatMock'

export default function PhoneFrameSlide() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        minHeight: 0,
        paddingTop: 24,
        boxSizing: 'border-box',
      }}
    >
      <div style={deviceFrameScaleStyle}>
        <DeviceFrame>
          <MessengerChatMock />
        </DeviceFrame>
      </div>
    </div>
  )
}
