import * as React from 'react';
import * as UI from '@/components/common';
import {useTheme} from '@/contexts/ThemeContext';
import styles from './styles';
import {heightPercentageToDP as hd} from 'react-native-responsive-screen';

interface DialerTabProps {}

const DialerTab: React.FC<DialerTabProps> = () => {
  const {colors} = useTheme();
  return (
    <>
      <UI.Block
        justify="space-between"
        backgroundColor={colors.background}
        style={styles.keypadContainer}>
        <UI.Block row justify="space-between">
          <UI.Clickable>
            <UI.Block
              center
              middle
              style={[styles.key, {borderColor: colors.gray4}]}>
              <UI.Text style={{fontFamily: 'Gordita-Medium'}} size={hd('2.8%')}>
                1
              </UI.Text>
            </UI.Block>
          </UI.Clickable>

          <UI.Clickable>
            <UI.Block
              center
              middle
              style={[styles.key, {borderColor: colors.gray4}]}>
              <UI.Text style={{fontFamily: 'Gordita-Medium'}} size={hd('2.8%')}>
                2
              </UI.Text>
            </UI.Block>
          </UI.Clickable>

          <UI.Clickable>
            <UI.Block
              center
              middle
              style={[styles.key, {borderColor: colors.gray4}]}>
              <UI.Text style={{fontFamily: 'Gordita-Medium'}} size={hd('2.8%')}>
                3
              </UI.Text>
            </UI.Block>
          </UI.Clickable>
        </UI.Block>

        <UI.Block row justify="space-between">
          <UI.Clickable>
            <UI.Block
              center
              middle
              style={[styles.key, {borderColor: colors.gray4}]}>
              <UI.Text style={{fontFamily: 'Gordita-Medium'}} size={hd('2.8%')}>
                4
              </UI.Text>
            </UI.Block>
          </UI.Clickable>

          <UI.Clickable>
            <UI.Block
              center
              middle
              style={[styles.key, {borderColor: colors.gray4}]}>
              <UI.Text style={{fontFamily: 'Gordita-Medium'}} size={hd('2.8%')}>
                5
              </UI.Text>
            </UI.Block>
          </UI.Clickable>

          <UI.Clickable>
            <UI.Block
              center
              middle
              style={[styles.key, {borderColor: colors.gray4}]}>
              <UI.Text style={{fontFamily: 'Gordita-Medium'}} size={hd('2.8%')}>
                6
              </UI.Text>
            </UI.Block>
          </UI.Clickable>
        </UI.Block>

        <UI.Block row justify="space-between">
          <UI.Clickable>
            <UI.Block
              center
              middle
              style={[styles.key, {borderColor: colors.gray4}]}>
              <UI.Text style={{fontFamily: 'Gordita-Medium'}} size={hd('2.8%')}>
                7
              </UI.Text>
            </UI.Block>
          </UI.Clickable>

          <UI.Clickable>
            <UI.Block
              center
              middle
              style={[styles.key, {borderColor: colors.gray4}]}>
              <UI.Text style={{fontFamily: 'Gordita-Medium'}} size={hd('2.8%')}>
                8
              </UI.Text>
            </UI.Block>
          </UI.Clickable>

          <UI.Clickable>
            <UI.Block
              center
              middle
              style={[styles.key, {borderColor: colors.gray4}]}>
              <UI.Text style={{fontFamily: 'Gordita-Medium'}} size={hd('2.8%')}>
                9
              </UI.Text>
            </UI.Block>
          </UI.Clickable>
        </UI.Block>

        <UI.Block row justify="space-between">
          <UI.Clickable>
            <UI.Block
              center
              middle
              style={[styles.key, {borderColor: colors.gray4}]}>
              <UI.Text style={{fontFamily: 'Gordita-Medium'}} size={hd('2.8%')}>
                +
              </UI.Text>
            </UI.Block>
          </UI.Clickable>

          <UI.Clickable>
            <UI.Block
              center
              middle
              style={[styles.key, {borderColor: colors.gray4}]}>
              <UI.Text style={{fontFamily: 'Gordita-Medium'}} size={hd('2.8%')}>
                0
              </UI.Text>
            </UI.Block>
          </UI.Clickable>

          <UI.Clickable>
            <UI.Block
              center
              middle
              style={[styles.key, {borderColor: colors.gray4}]}>
              <UI.Icon name="ios-backspace" />
            </UI.Block>
          </UI.Clickable>
        </UI.Block>

        <UI.Block center>
          <UI.Clickable>
            <UI.Block
              center
              middle
              style={[
                styles.key,
                {backgroundColor: colors.secondary, borderWidth: 0},
              ]}>
              <UI.Icon name="ios-call" color={colors.white} />
            </UI.Block>
          </UI.Clickable>
        </UI.Block>
      </UI.Block>
    </>
  );
};

export default DialerTab;
