import * as React from 'react';
import {Image, LayoutAnimation, Platform, UIManager} from 'react-native';
import * as UI from '../common';
import moment from 'moment';
import OptionMenu from '../OptionMenu';
import {formatPhone, msToTime} from '@/utils';
import {
  heightPercentageToDP as hd,
  widthPercentageToDP as wd,
} from 'react-native-responsive-screen';
import Slider from 'react-native-reanimated-slider';
import {Value} from 'react-native-reanimated';
import {useTheme} from '@/contexts/ThemeContext';
import styles from './styles';

const isIOS = Platform.OS === 'ios';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

interface VoiceMailProps {
  name?: string;
  phone: string;
  image?: string;
  timestamp: number;
  voiceMessage: string;
  duration: number;
  onVoiceCall?: () => void;
  onVideoCall?: () => void;
  onDelete?: () => void;
  onViewProfile?: () => void;
  onArchive?: () => void;
}

const VoiceMail: React.FC<VoiceMailProps> = ({
  voiceMessage,
  name,
  phone,
  timestamp,
  image,
  duration,
  onVideoCall,
  onViewProfile,
  onVoiceCall,
  onDelete,
  onArchive,
}) => {
  const {colors} = useTheme();
  const [expanded, setExpanded] = React.useState(false);
  const [playing, setPlaying] = React.useState(false);
  const [currentValue] = React.useState(0);

  React.useEffect(() => {
    LayoutAnimation.easeInEaseOut();
  }, [expanded]);

  const [currentTime] = React.useState(new Value(currentValue));
  const [seekableDuration] = React.useState(new Value(duration));

  const slidingStart = () => {
    console.log('slide started');
  };
  const slidingComplete = (number: number) => {
    console.log('slide completed' + number);
  };

  const onPlay = () => {
    setPlaying(!playing);
  };

  const handleCopyNumber = () => {};

  return (
    <>
      <UI.Block style={styles.contactContainer}>
        <UI.Clickable onClick={() => setExpanded(!expanded)}>
          <UI.Block center row justify="space-between">
            <UI.Block row width="auto" center>
              <UI.Block width="auto" style={{marginRight: 10}}>
                {image ? (
                  <Image source={{uri: image}} style={styles.contactImage} />
                ) : (
                  <UI.Icon name="ios-person-circle-sharp" size={hd('4.5%')} />
                )}
              </UI.Block>
              <UI.Block width="auto">
                <UI.Text body>{name || formatPhone(phone)}</UI.Text>
                {expanded ? (
                  <UI.Text color={colors.gray2} size={hd('1.2%')}>
                    {moment(timestamp).calendar({
                      lastDay: '[Yesterday,] LT',
                      sameDay: 'LT',
                      nextDay: '[Tomorrow,] LT',
                      lastWeek: 'MM/DD/YY[,] LT',
                      nextWeek: 'MMM D [,] LT',
                      sameElse: 'MM/DD/YY[,] LT',
                    })}
                  </UI.Text>
                ) : (
                  <UI.Text size={hd('1.3%')}>{msToTime(duration)}</UI.Text>
                )}
              </UI.Block>
            </UI.Block>

            <UI.Block width="auto">
              {expanded ? (
                <OptionMenu
                  customButton={
                    <UI.Icon size={20} name="ios-ellipsis-vertical" />
                  }
                  destructiveIndex={5}
                  onClick={() => setExpanded(!expanded)}
                  options={[
                    'Copy Number',
                    'Voice Call',
                    'Video Call',
                    'View Profile',
                    'Archive',
                    'Delete',
                    'Cancel',
                  ]}
                  actions={[
                    onArchive?.bind(null, phone),
                    onVoiceCall?.bind(null, phone) as any,
                    onVideoCall?.bind(null, phone),
                    onViewProfile?.bind(null, phone),
                    handleCopyNumber.bind(null, phone),
                    onDelete?.bind(null, phone),
                  ]}
                />
              ) : (
                <UI.Text color={colors.gray2} size={hd('1.3%')}>
                  {moment(timestamp).calendar({
                    lastDay: '[Yesterday,] LT',
                    sameDay: 'LT',
                    nextDay: '[Tomorrow,] LT',
                    lastWeek: 'MM/DD/YY[,] LT',
                    nextWeek: 'MMM D [,] LT',
                    sameElse: 'MM/DD/YY[,] LT',
                  })}
                </UI.Text>
              )}
            </UI.Block>
          </UI.Block>
        </UI.Clickable>

        {expanded && (
          <>
            <UI.Spacer />

            <UI.Block style={{paddingHorizontal: wd('4%')}}>
              <UI.Block row>
                <UI.Block width="90%">
                  <Slider
                    style={{flex: 1}}
                    minimumTrackTintColor={colors.primary}
                    maximumTrackTintColor={colors.gray3}
                    thumbTintColor={colors.primary}
                    progress={currentTime}
                    min={new Value(0)}
                    max={seekableDuration}
                    onSlidingStart={slidingStart}
                    onSlidingComplete={slidingComplete}
                    ballon={(time: number) => msToTime(time)}
                  />
                  <UI.Block row center justify="space-between">
                    <UI.Text size={hd('1.3%')}>
                      {msToTime(currentTime._value)}
                    </UI.Text>
                    <UI.Text size={hd('1.3%')}>
                      {msToTime(duration - currentTime._value)}
                    </UI.Text>
                  </UI.Block>
                </UI.Block>
                <UI.Spacer medium />
                <UI.Clickable onClick={onPlay}>
                  <UI.Icon
                    color={colors.secondary}
                    size={24}
                    name={playing ? 'ios-pause' : 'ios-play'}
                  />
                </UI.Clickable>
              </UI.Block>

              <UI.Spacer />
              <UI.Block style={[styles.divider, {borderColor: colors.gray4}]} />
            </UI.Block>
          </>
        )}
      </UI.Block>
    </>
  );
};

export default VoiceMail;
