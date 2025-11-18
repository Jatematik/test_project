import { Text, TouchableOpacity, View } from 'react-native';
import {
  NavigationState,
  SceneRendererProps,
  TabDescriptor,
} from 'react-native-tab-view';
import { styles } from './TabBar.styles';
import { colors } from '../../../theme/colors';

interface TabBarProps {
  props: SceneRendererProps & {
    navigationState: NavigationState<{
      key: string;
      title: string;
    }>;
    options:
      | Record<
          string,
          TabDescriptor<{
            key: string;
            title: string;
          }>
        >
      | undefined;
  };
  setIndex: (value: React.SetStateAction<number>) => void;
}

export const TabBar = ({ props, setIndex }: TabBarProps) => {
  return (
    <View style={styles.tabContainer}>
      <View style={styles.tabScrollContainer}>
        {props.navigationState.routes.map((route, i) => {
          const isFocused = props.navigationState.index === i;

          return (
            <TouchableOpacity
              key={route.key}
              style={styles.tabButton}
              onPress={() => setIndex(i)}
            >
              <Text
                style={[
                  styles.tabText,
                  {
                    color: isFocused ? colors.activeTab : colors.textSecondary,
                  },
                ]}
              >
                {route.title}
              </Text>
              {isFocused && <View style={styles.indicator} />}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};
