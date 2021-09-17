import * as React from 'react';
import PropTypes from 'prop-types';
import { View, ViewPropTypes } from 'react-native';
import { Svg, Path, G, Defs, Stop, LinearGradient, Linecap, NumberProp } from 'react-native-svg';

const defaultProps = {
  tintColor: 'black',
  tintTransparency: true,
  rotation: 90,
  lineCap: 'butt',
  arcSweepAngle: 360,
  padding: 0,
  dashedBackground: { width: 0, gap: 0 },
  dashedTint: { width: 0, gap: 0 },
};

type CircularProgressProps = {
  size: number;
  width: number;
  backgroundWidth?: number;
  tintColor?: string;
  tintTransparency: boolean;
  style?: any;
  rotation?: number;
  lineCap?: Linecap;
  arcSweepAngle?: number;
  fill: number;
  padding?: number;
  renderCap?: (object: any) => void;
  dashedBackground?: Linecap;
  dashedTint?: NumberProp[];
} & typeof defaultProps;

function CircularProgress(props: CircularProgressProps) {
  const polarToCartesian = (
    centerX: number,
    centerY: number,
    radius: number,
    angleInDegrees: number
  ) => {
    var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  };

  const makeCirclePath = (
    x: number,
    y: number,
    radius: number,
    startAngle: number,
    endAngle: number
  ) => {
    var start = polarToCartesian(x, y, radius, endAngle * 0.9999);
    var end = polarToCartesian(x, y, radius, startAngle);
    var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
    var d = ['M', start.x, start.y, 'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y];
    return d.join(' ');
  };

  const clampFill = (fill: number) => Math.min(100, Math.max(0, fill));

  const {
    size,
    width,
    backgroundWidth,
    tintTransparency,
    style,
    rotation,
    lineCap,
    arcSweepAngle,
    fill,
    padding,
    dashedBackground,
    dashedTint,
  } = props;

  const maxWidthCircle = backgroundWidth
    ? Math.max(width, backgroundWidth)
    : width;
  const sizeWithPadding = size / 2 + padding / 2;
  const radius = size / 2 - maxWidthCircle / 2 - padding / 2;

  const currentFillAngle = (arcSweepAngle * clampFill(fill)) / 100;
  const backgroundPath = makeCirclePath(
    sizeWithPadding,
    sizeWithPadding,
    radius,
    tintTransparency ? 0 : currentFillAngle,
    arcSweepAngle
  );
  const circlePath = makeCirclePath(
    sizeWithPadding,
    sizeWithPadding,
    radius,
    0,
    currentFillAngle
  );
  const coordinate = polarToCartesian(
    sizeWithPadding,
    sizeWithPadding,
    radius,
    currentFillAngle
  );
  const cap = props.renderCap ? props.renderCap({ center: coordinate }) : null;

  const strokeDasharrayTint =
    dashedTint.gap > 0
      ? Object.values(dashedTint)
      : [];

  const strokeDasharrayBackground =
    dashedBackground.gap > 0
      ? Object.values(dashedBackground)
      : [];

  return (
    <View style={style}>
      <Svg width={size + padding} height={size + padding}>
        <G
          rotation={rotation}
          originX={(size + padding) / 2}
          originY={(size + padding) / 2}
        >
          <Defs>
            <LinearGradient id="background" x1="0" y1="0" x2="100%" y2="0">
              <Stop offset="0" stopColor="#f7cd46" />
              <Stop offset="1" stopColor="#ef9837" />
            </LinearGradient>
            <LinearGradient id="progress" x1="0" y1="0" x2="100%" y2="0">
              <Stop offset="0" stopColor="#4db856" />
              <Stop offset="1" stopColor="#008458" />
            </LinearGradient>
          </Defs>
          <Path
            d={backgroundPath}
            stroke="url(#background)"
            strokeWidth={backgroundWidth || width}
            strokeLinecap={lineCap}
            strokeDasharray={strokeDasharrayBackground}
            fill="transparent"
          />
          <Path
            d={circlePath}
            stroke="url(#progress)"
            strokeWidth={width}
            strokeLinecap={lineCap}
            strokeDasharray={strokeDasharrayTint}
            fill="transparent"
          />
          {cap}
        </G>
      </Svg>
    </View>
  );
}

CircularProgress.propTypes = {
  style: ViewPropTypes.style,
  size: PropTypes.number.isRequired,
  fill: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  backgroundWidth: PropTypes.number,
  tintColor: PropTypes.string,
  tintTransparency: PropTypes.bool,
  backgroundColor: PropTypes.string,
  rotation: PropTypes.number,
  lineCap: PropTypes.string,
  arcSweepAngle: PropTypes.number,
  children: PropTypes.func,
  padding: PropTypes.number,
  renderCap: PropTypes.func,
  dashedBackground: PropTypes.object,
  dashedTint: PropTypes.object,
};

CircularProgress.defaultProps = defaultProps;

export default CircularProgress;
