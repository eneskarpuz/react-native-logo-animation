<p align="center">
<img alt="React Native Logo Animation" src="https://github.com/anastely/react-native-logo-animation/blob/main/assets/screenshots/Demo.gif" width="50%" />
</p>

# Installation

Add the dependency:

```ruby
npm i react-native-logo-animation
```
Or
```ruby
yarn add react-native-logo-animation
```

# Peer Dependencies

###### IMPORTANT! You need install them

```JSON
"react-native-reanimated": ">=2.0.0-alpha.9.2",
"react-native-svg": ">=0.9.1"
```


# Usage

## Import

```js
import AnimatedLogo from 'react-native-logo-animation';
```

## Basic Usage

```js
<AnimatedLogo
  vWidth={210}
  vHeight={257}
  duration={9000}
  strokeWidth={5}
  margin={10}
  strokeColor={'#000'}
  animatedStrokeColor={'#f00'}
  isRepeat={true}
  paths={[
    'M201.36 180.875H175.16C193.93 155.63 209.39 127.985 209.39 105.375C209.395 90.6181 206.264 76.0286 200.206 62.573C194.147 49.1173 185.298 37.1027 174.245 27.325C177.914 26.892 181.605 26.675 185.3 26.675C187.004 26.675 188.638 25.9981 189.843 24.7931C191.048 23.5882 191.725 21.954 191.725 20.25C191.725 18.546 191.048 16.9117 189.843 15.7068C188.638 14.5019 187.004 13.825 185.3 13.825C176.861 13.8125 168.452 14.8198 160.255 16.825C143.69 6.46153 124.545 0.965942 105.005 0.965942C85.4655 0.965942 66.3198 6.46153 49.755 16.825C41.558 14.8198 33.1487 13.8125 24.71 13.825C23.006 13.825 21.3718 14.5019 20.1668 15.7068C18.9619 16.9117 18.285 18.546 18.285 20.25C18.285 21.954 18.9619 23.5882 20.1668 24.7931C21.3718 25.9981 23.006 26.675 24.71 26.675C28.4045 26.675 32.0959 26.892 35.765 27.325C24.7123 37.1027 15.8634 49.1173 9.8045 62.573C3.74558 76.0286 0.614948 90.6181 0.620001 105.375C0.620001 127.97 16.075 155.615 34.85 180.875H8.64C6.93598 180.875 5.30176 181.552 4.09684 182.757C2.89192 183.962 2.215 185.596 2.215 187.3C2.215 189.004 2.89192 190.638 4.09684 191.843C5.30176 193.048 6.93598 193.725 8.64 193.725H44.815C70.61 225.635 98.5 251.125 100.685 253.085L105 257L109.315 253.085C111.475 251.125 139.39 225.635 165.185 193.72H201.36C203.064 193.72 204.698 193.043 205.903 191.838C207.108 190.633 207.785 188.999 207.785 187.295C207.785 185.591 207.108 183.957 205.903 182.752C204.698 181.547 203.064 180.87 201.36 180.87V180.875ZM105 13.85C118.411 13.8394 131.659 16.7932 143.795 22.5C126.385 30.255 112.58 42.735 105 57.82C97.42 42.735 83.615 30.255 66.205 22.5C78.3413 16.7932 91.5889 13.8394 105 13.85ZM98.575 87.725C98.575 93.4428 96.8795 99.0323 93.7028 103.787C90.5261 108.541 86.011 112.246 80.7284 114.434C75.4458 116.622 69.6329 117.195 64.0249 116.079C58.4169 114.964 53.2657 112.211 49.2225 108.167C45.1794 104.124 42.426 98.973 41.3105 93.365C40.195 87.757 40.7675 81.9442 42.9556 76.6616C45.1438 71.379 48.8492 66.8639 53.6035 63.6872C58.3577 60.5105 63.9471 58.815 69.665 58.815C77.33 58.8229 84.6787 61.8713 90.0987 67.2913C95.5186 72.7112 98.5671 80.06 98.575 87.725ZM105 109.94C106.58 112.461 108.424 114.808 110.5 116.94L105 127.98L99.5 116.94C101.576 114.808 103.42 112.461 105 109.94ZM111.425 87.725C111.425 82.0071 113.121 76.4177 116.297 71.6634C119.474 66.9092 123.989 63.2038 129.272 61.0156C134.554 58.8275 140.367 58.255 145.975 59.3705C151.583 60.486 156.734 63.2394 160.777 67.2825C164.821 71.3257 167.574 76.4769 168.689 82.0849C169.805 87.6929 169.232 93.5057 167.044 98.7884C164.856 104.071 161.151 108.586 156.397 111.763C151.642 114.939 146.053 116.635 140.335 116.635C132.67 116.627 125.321 113.579 119.901 108.159C114.481 102.739 111.433 95.3899 111.425 87.725ZM13.455 105.39C13.4581 90.7814 16.9589 76.3859 23.6648 63.4074C30.3706 50.4288 40.0866 39.2446 52 30.79C63.625 34.42 73.805 40.29 81.655 47.73C75.0975 45.7615 68.1566 45.4356 61.4434 46.7809C54.7303 48.1261 48.4509 51.1014 43.1582 55.4445C37.8655 59.7877 33.7218 65.3655 31.0921 71.6869C28.4623 78.0083 27.4271 84.8794 28.0777 91.695C28.7283 98.5106 31.0447 105.062 34.8228 110.771C38.601 116.481 43.7251 121.174 49.7439 124.438C55.7627 127.701 62.4916 129.435 69.338 129.486C76.1844 129.537 82.9383 127.903 89.005 124.73L99.25 145.23C99.7829 146.299 100.603 147.198 101.619 147.827C102.635 148.455 103.806 148.788 105 148.788C106.194 148.788 107.365 148.455 108.381 147.827C109.397 147.198 110.217 146.299 110.75 145.23L120.995 124.73C127.06 127.898 133.811 129.527 140.654 129.473C147.497 129.419 154.221 127.684 160.236 124.421C166.25 121.157 171.371 116.465 175.146 110.758C178.921 105.051 181.236 98.5034 181.886 91.6915C182.536 84.8796 181.502 78.0123 178.875 71.6939C176.247 65.3756 172.107 59.7999 166.819 55.4575C161.53 51.1152 155.255 48.1393 148.546 46.7918C141.837 45.4443 134.9 45.7665 128.345 47.73C136.195 40.295 146.375 34.42 158 30.79C169.913 39.2446 179.629 50.4288 186.335 63.4074C193.041 76.3859 196.542 90.7814 196.545 105.39C196.545 127.125 179.045 155.495 159.045 180.89H133.91V177.68C133.91 176.836 133.744 176.001 133.421 175.221C133.098 174.442 132.625 173.733 132.028 173.137C131.432 172.54 130.723 172.067 129.944 171.744C129.164 171.421 128.329 171.255 127.485 171.255C126.641 171.255 125.806 171.421 125.026 171.744C124.247 172.067 123.538 172.54 122.942 173.137C122.345 173.733 121.872 174.442 121.549 175.221C121.226 176.001 121.06 176.836 121.06 177.68V180.89H88.94V177.68C88.94 176.836 88.7738 176.001 88.4509 175.221C88.128 174.442 87.6548 173.733 87.0582 173.137C86.4615 172.54 85.7533 172.067 84.9737 171.744C84.1942 171.421 83.3587 171.255 82.515 171.255C81.6713 171.255 80.8358 171.421 80.0563 171.744C79.2767 172.067 78.5685 172.54 77.9718 173.137C77.3752 173.733 76.902 174.442 76.5791 175.221C76.2562 176.001 76.09 176.836 76.09 177.68V180.89H50.965C30.935 155.5 13.455 127.14 13.455 105.39ZM105 239.535C89.7331 225.012 75.2144 209.722 61.5 193.725H76.08V196.935C76.08 198.639 76.7569 200.273 77.9618 201.478C79.1668 202.683 80.801 203.36 82.505 203.36C84.209 203.36 85.8432 202.683 87.0482 201.478C88.2531 200.273 88.93 198.639 88.93 196.935V193.725H121.05V196.935C121.05 198.639 121.727 200.273 122.932 201.478C124.137 202.683 125.771 203.36 127.475 203.36C129.179 203.36 130.813 202.683 132.018 201.478C133.223 200.273 133.9 198.639 133.9 196.935V193.725H148.5C134.785 209.721 120.266 225.011 105 239.535Z',
    'M69.665 97.36C74.9863 97.36 79.3 93.0462 79.3 87.725C79.3 82.4037 74.9863 78.09 69.665 78.09C64.3437 78.09 60.03 82.4037 60.03 87.725C60.03 93.0462 64.3437 97.36 69.665 97.36Z',
    'M140.335 97.36C145.656 97.36 149.97 93.0462 149.97 87.725C149.97 82.4037 145.656 78.09 140.335 78.09C135.014 78.09 130.7 82.4037 130.7 87.725C130.7 93.0462 135.014 97.36 140.335 97.36Z',
    'M201.36 180.875H175.16C193.93 155.63 209.39 127.985 209.39 105.375C209.395 90.6181 206.264 76.0286 200.206 62.573C194.147 49.1173 185.298 37.1027 174.245 27.325C177.914 26.892 181.605 26.675 185.3 26.675C187.004 26.675 188.638 25.9981 189.843 24.7931C191.048 23.5882 191.725 21.954 191.725 20.25C191.725 18.546 191.048 16.9117 189.843 15.7068C188.638 14.5019 187.004 13.825 185.3 13.825C176.861 13.8125 168.452 14.8198 160.255 16.825C143.69 6.46153 124.545 0.965942 105.005 0.965942C85.4655 0.965942 66.3198 6.46153 49.755 16.825C41.558 14.8198 33.1487 13.8125 24.71 13.825C23.006 13.825 21.3718 14.5019 20.1668 15.7068C18.9619 16.9117 18.285 18.546 18.285 20.25C18.285 21.954 18.9619 23.5882 20.1668 24.7931C21.3718 25.9981 23.006 26.675 24.71 26.675C28.4045 26.675 32.0959 26.892 35.765 27.325C24.7123 37.1027 15.8634 49.1173 9.8045 62.573C3.74558 76.0286 0.614948 90.6181 0.620001 105.375C0.620001 127.97 16.075 155.615 34.85 180.875H8.64C6.93598 180.875 5.30176 181.552 4.09684 182.757C2.89192 183.962 2.215 185.596 2.215 187.3C2.215 189.004 2.89192 190.638 4.09684 191.843C5.30176 193.048 6.93598 193.725 8.64 193.725H44.815C70.61 225.635 98.5 251.125 100.685 253.085L105 257L109.315 253.085C111.475 251.125 139.39 225.635 165.185 193.72H201.36C203.064 193.72 204.698 193.043 205.903 191.838C207.108 190.633 207.785 188.999 207.785 187.295C207.785 185.591 207.108 183.957 205.903 182.752C204.698 181.547 203.064 180.87 201.36 180.87V180.875ZM105 13.85C118.411 13.8394 131.659 16.7932 143.795 22.5C126.385 30.255 112.58 42.735 105 57.82C97.42 42.735 83.615 30.255 66.205 22.5C78.3413 16.7932 91.5889 13.8394 105 13.85ZM98.575 87.725C98.575 93.4428 96.8795 99.0323 93.7028 103.787C90.5261 108.541 86.011 112.246 80.7284 114.434C75.4458 116.622 69.6329 117.195 64.0249 116.079C58.4169 114.964 53.2657 112.211 49.2225 108.167C45.1794 104.124 42.426 98.973 41.3105 93.365C40.195 87.757 40.7675 81.9442 42.9556 76.6616C45.1438 71.379 48.8492 66.8639 53.6035 63.6872C58.3577 60.5105 63.9471 58.815 69.665 58.815C77.33 58.8229 84.6787 61.8713 90.0987 67.2913C95.5186 72.7112 98.5671 80.06 98.575 87.725ZM105 109.94C106.58 112.461 108.424 114.808 110.5 116.94L105 127.98L99.5 116.94C101.576 114.808 103.42 112.461 105 109.94ZM111.425 87.725C111.425 82.0071 113.121 76.4177 116.297 71.6634C119.474 66.9092 123.989 63.2038 129.272 61.0156C134.554 58.8275 140.367 58.255 145.975 59.3705C151.583 60.486 156.734 63.2394 160.777 67.2825C164.821 71.3257 167.574 76.4769 168.689 82.0849C169.805 87.6929 169.232 93.5057 167.044 98.7884C164.856 104.071 161.151 108.586 156.397 111.763C151.642 114.939 146.053 116.635 140.335 116.635C132.67 116.627 125.321 113.579 119.901 108.159C114.481 102.739 111.433 95.3899 111.425 87.725ZM13.455 105.39C13.4581 90.7814 16.9589 76.3859 23.6648 63.4074C30.3706 50.4288 40.0866 39.2446 52 30.79C63.625 34.42 73.805 40.29 81.655 47.73C75.0975 45.7615 68.1566 45.4356 61.4434 46.7809C54.7303 48.1261 48.4509 51.1014 43.1582 55.4445C37.8655 59.7877 33.7218 65.3655 31.0921 71.6869C28.4623 78.0083 27.4271 84.8794 28.0777 91.695C28.7283 98.5106 31.0447 105.062 34.8228 110.771C38.601 116.481 43.7251 121.174 49.7439 124.438C55.7627 127.701 62.4916 129.435 69.338 129.486C76.1844 129.537 82.9383 127.903 89.005 124.73L99.25 145.23C99.7829 146.299 100.603 147.198 101.619 147.827C102.635 148.455 103.806 148.788 105 148.788C106.194 148.788 107.365 148.455 108.381 147.827C109.397 147.198 110.217 146.299 110.75 145.23L120.995 124.73C127.06 127.898 133.811 129.527 140.654 129.473C147.497 129.419 154.221 127.684 160.236 124.421C166.25 121.157 171.371 116.465 175.146 110.758C178.921 105.051 181.236 98.5034 181.886 91.6915C182.536 84.8796 181.502 78.0123 178.875 71.6939C176.247 65.3756 172.107 59.7999 166.819 55.4575C161.53 51.1152 155.255 48.1393 148.546 46.7918C141.837 45.4443 134.9 45.7665 128.345 47.73C136.195 40.295 146.375 34.42 158 30.79C169.913 39.2446 179.629 50.4288 186.335 63.4074C193.041 76.3859 196.542 90.7814 196.545 105.39C196.545 127.125 179.045 155.495 159.045 180.89H133.91V177.68C133.91 176.836 133.744 176.001 133.421 175.221C133.098 174.442 132.625 173.733 132.028 173.137C131.432 172.54 130.723 172.067 129.944 171.744C129.164 171.421 128.329 171.255 127.485 171.255C126.641 171.255 125.806 171.421 125.026 171.744C124.247 172.067 123.538 172.54 122.942 173.137C122.345 173.733 121.872 174.442 121.549 175.221C121.226 176.001 121.06 176.836 121.06 177.68V180.89H88.94V177.68C88.94 176.836 88.7738 176.001 88.4509 175.221C88.128 174.442 87.6548 173.733 87.0582 173.137C86.4615 172.54 85.7533 172.067 84.9737 171.744C84.1942 171.421 83.3587 171.255 82.515 171.255C81.6713 171.255 80.8358 171.421 80.0563 171.744C79.2767 172.067 78.5685 172.54 77.9718 173.137C77.3752 173.733 76.902 174.442 76.5791 175.221C76.2562 176.001 76.09 176.836 76.09 177.68V180.89H50.965C30.935 155.5 13.455 127.14 13.455 105.39ZM105 239.535C89.7331 225.012 75.2144 209.722 61.5 193.725H76.08V196.935C76.08 198.639 76.7569 200.273 77.9618 201.478C79.1668 202.683 80.801 203.36 82.505 203.36C84.209 203.36 85.8432 202.683 87.0482 201.478C88.2531 200.273 88.93 198.639 88.93 196.935V193.725H121.05V196.935C121.05 198.639 121.727 200.273 122.932 201.478C124.137 202.683 125.771 203.36 127.475 203.36C129.179 203.36 130.813 202.683 132.018 201.478C133.223 200.273 133.9 198.639 133.9 196.935V193.725H148.5C134.785 209.721 120.266 225.011 105 239.535Z',
    'M69.665 97.36C74.9863 97.36 79.3 93.0462 79.3 87.725C79.3 82.4037 74.9863 78.09 69.665 78.09C64.3437 78.09 60.03 82.4037 60.03 87.725C60.03 93.0462 64.3437 97.36 69.665 97.36Z',
    'M140.335 97.36C145.656 97.36 149.97 93.0462 149.97 87.725C149.97 82.4037 145.656 78.09 140.335 78.09C135.014 78.09 130.7 82.4037 130.7 87.725C130.7 93.0462 135.014 97.36 140.335 97.36Z',
  ]}
/>
```

### Configuration - Props

| Property            |     Type      | Description                             |
| ------------------- | :-----------: | --------------------------------------- |
| margin              |    number     | set the margin for viewBox              |
| paths               | array[string] | set the Paths `d`                       |
| vWidth              |    number     | set the svg width/viewBox               |
| vHeight             |    number     | set the svg height/viewBox              |
| duration            |    number     | change the Animation duration "ms"      |
| strokeWidth         |    number     | set the image source as uri             |
| strokeColor         |     color     | change the placeholder paths color      |
| animatedStrokeColor |     color     | change the Animated paths color         |
| isRepeat            |     bool      | set if you want to repeat the animation |
