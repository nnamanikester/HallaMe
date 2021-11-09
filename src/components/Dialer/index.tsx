import * as React from 'react';
import * as UI from '@/components/common';
import {useTheme} from '@/contexts/ThemeContext';
import styles from './styles';
import {heightPercentageToDP as hd} from 'react-native-responsive-screen';
import {Pop} from '@/animations';
import {formatPhone} from '@/utils';

interface DialerProps {
  onChangeValue?: (val: string) => void;
  onVoiceCall?: (phone: string) => void;
  onVideoCall?: (phone: string) => void;
  min?: number;
  maxLength?: number;
}

const Dialer: React.FC<DialerProps> = ({
  onChangeValue,
  maxLength = 20,
  onVoiceCall,
  onVideoCall,
}) => {
  const {colors} = useTheme();
  const [value, setValue] = React.useState('');

  const handleValueChange = (val: string) => {
    if (maxLength && value.length >= maxLength) {
      return;
    }
    if (parseInt(value, 10) === 0 && val === '0') {
      setValue('0');
      return onChangeValue && onChangeValue('0');
    }
    setValue(value + val);
    return onChangeValue && onChangeValue(value + val);
  };

  const handleDelete = (): void => {
    setValue(value.substring(0, value.length - 1));
    return onChangeValue && onChangeValue(value.substring(0, value.length - 1));
  };

  const clearInput = (): void => {
    setValue('');
    return onChangeValue && onChangeValue('');
  };

  const handlePasteFromClipboard = () => {};

  return (
    <>
      <UI.Block
        justify="space-between"
        backgroundColor={colors.background}
        style={styles.keypadContainer}>
        {value ? (
          <UI.Block>
            <UI.Spacer />
            <UI.Text style={{textAlign: 'center'}} bold size={hd('2.8%')}>
              {formatPhone(value) || value}
            </UI.Text>
            <UI.Spacer />
          </UI.Block>
        ) : (
          <UI.Block right>
            <UI.Clickable onClick={handlePasteFromClipboard}>
              <UI.Icon size={24} name="clipboard-outline" />
            </UI.Clickable>
            <UI.Spacer />
          </UI.Block>
        )}

        <UI.Block row justify="space-between">
          <Pop from={1} to={0.8} onClick={handleValueChange.bind(null, '1')}>
            <UI.Block
              center
              middle
              style={[styles.key, {borderColor: colors.gray4}]}>
              <UI.Text style={{fontFamily: 'Gordita-Medium'}} size={hd('2.8%')}>
                1
              </UI.Text>
            </UI.Block>
          </Pop>

          <Pop from={1} to={0.8} onClick={handleValueChange.bind(null, '2')}>
            <UI.Block
              center
              middle
              style={[styles.key, {borderColor: colors.gray4}]}>
              <UI.Text style={{fontFamily: 'Gordita-Medium'}} size={hd('2.8%')}>
                2
              </UI.Text>
            </UI.Block>
          </Pop>

          <Pop from={1} to={0.8} onClick={handleValueChange.bind(null, '3')}>
            <UI.Block
              center
              middle
              style={[styles.key, {borderColor: colors.gray4}]}>
              <UI.Text style={{fontFamily: 'Gordita-Medium'}} size={hd('2.8%')}>
                3
              </UI.Text>
            </UI.Block>
          </Pop>
        </UI.Block>

        <UI.Spacer />

        <UI.Block row justify="space-between">
          <Pop from={1} to={0.8} onClick={handleValueChange.bind(null, '4')}>
            <UI.Block
              center
              middle
              style={[styles.key, {borderColor: colors.gray4}]}>
              <UI.Text style={{fontFamily: 'Gordita-Medium'}} size={hd('2.8%')}>
                4
              </UI.Text>
            </UI.Block>
          </Pop>

          <Pop from={1} to={0.8} onClick={handleValueChange.bind(null, '5')}>
            <UI.Block
              center
              middle
              style={[styles.key, {borderColor: colors.gray4}]}>
              <UI.Text style={{fontFamily: 'Gordita-Medium'}} size={hd('2.8%')}>
                5
              </UI.Text>
            </UI.Block>
          </Pop>

          <Pop from={1} to={0.8} onClick={handleValueChange.bind(null, '6')}>
            <UI.Block
              center
              middle
              style={[styles.key, {borderColor: colors.gray4}]}>
              <UI.Text style={{fontFamily: 'Gordita-Medium'}} size={hd('2.8%')}>
                6
              </UI.Text>
            </UI.Block>
          </Pop>
        </UI.Block>

        <UI.Spacer />

        <UI.Block row justify="space-between">
          <Pop from={1} to={0.8} onClick={handleValueChange.bind(null, '7')}>
            <UI.Block
              center
              middle
              style={[styles.key, {borderColor: colors.gray4}]}>
              <UI.Text style={{fontFamily: 'Gordita-Medium'}} size={hd('2.8%')}>
                7
              </UI.Text>
            </UI.Block>
          </Pop>

          <Pop from={1} to={0.8} onClick={handleValueChange.bind(null, '8')}>
            <UI.Block
              center
              middle
              style={[styles.key, {borderColor: colors.gray4}]}>
              <UI.Text style={{fontFamily: 'Gordita-Medium'}} size={hd('2.8%')}>
                8
              </UI.Text>
            </UI.Block>
          </Pop>

          <Pop from={1} to={0.8} onClick={handleValueChange.bind(null, '9')}>
            <UI.Block
              center
              middle
              style={[styles.key, {borderColor: colors.gray4}]}>
              <UI.Text style={{fontFamily: 'Gordita-Medium'}} size={hd('2.8%')}>
                9
              </UI.Text>
            </UI.Block>
          </Pop>
        </UI.Block>

        <UI.Spacer />

        <UI.Block row justify="space-between">
          <Pop from={1} to={0.8} onClick={handleValueChange.bind(null, '+')}>
            <UI.Block
              center
              middle
              style={[styles.key, {borderColor: colors.gray4}]}>
              <UI.Text style={{fontFamily: 'Gordita-Medium'}} size={hd('2.8%')}>
                +
              </UI.Text>
            </UI.Block>
          </Pop>

          <Pop from={1} to={0.8} onClick={handleValueChange.bind(null, '0')}>
            <UI.Block
              center
              middle
              style={[styles.key, {borderColor: colors.gray4}]}>
              <UI.Text style={{fontFamily: 'Gordita-Medium'}} size={hd('2.8%')}>
                0
              </UI.Text>
            </UI.Block>
          </Pop>

          <Pop
            from={1}
            to={0.8}
            onLongPress={clearInput}
            onClick={handleDelete}>
            <UI.Block
              center
              middle
              style={[styles.key, {borderColor: colors.gray4}]}>
              <UI.Icon name="ios-backspace" />
            </UI.Block>
          </Pop>
        </UI.Block>

        <UI.Spacer medium />

        <UI.Block middle row>
          <Pop
            from={1}
            to={0.8}
            onClick={() => value && onVoiceCall && onVoiceCall(value)}>
            <UI.Block
              center
              middle
              style={[
                styles.key,
                {backgroundColor: colors.secondary, borderWidth: 0},
              ]}>
              <UI.Icon name="ios-call" color={colors.white} />
            </UI.Block>
          </Pop>
          <UI.Spacer medium />
          <Pop
            from={1}
            to={0.8}
            onClick={() => value && onVideoCall && onVideoCall(value)}>
            <UI.Block
              center
              middle
              style={[
                styles.key,
                {backgroundColor: colors.primary, borderWidth: 0},
              ]}>
              <UI.Icon name="ios-videocam" color={colors.white} />
            </UI.Block>
          </Pop>
        </UI.Block>
      </UI.Block>
    </>
  );
};

export default Dialer;
