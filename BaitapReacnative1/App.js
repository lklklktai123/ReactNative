/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, SafeAreaView} from 'react-native';

export default class App extends Component {
  render() {
    return (
      //anh 1
      // <SafeAreaView style={{flex: 1, flexDirection: 'column'}}>
      //   <View style={{flex: 1}}>
      //     <View
      //       style={{
      //         flex: 1,
      //         backgroundColor: 'red',
      //         justifyContent: 'center',
      //         alignItems: 'center',
      //       }}>
      //       <Text> A </Text>
      //     </View>
      //     <View
      //       style={{
      //         flex: 1,
      //         backgroundColor: 'green',
      //         justifyContent: 'center',
      //         alignItems: 'center',
      //       }}>
      //       <Text> B </Text>
      //     </View>
      //     <View
      //       style={{
      //         flex: 1,
      //         backgroundColor: '#bdb76b',
      //         justifyContent: 'center',
      //         alignItems: 'center',
      //       }}>
      //       <Text> C </Text>
      //     </View>
      //     <View
      //       style={{
      //         flex: 1,
      //         backgroundColor: 'blue',
      //         justifyContent: 'center',
      //         alignItems: 'center',
      //       }}>
      //       <Text> D </Text>
      //     </View>
      //   </View>

      //   <View style={{flex: 1, flexDirection: 'row'}}>
      //     <View
      //       style={{
      //         flex: 1,
      //         backgroundColor: '#bdb76b',
      //         justifyContent: 'center',
      //         alignItems: 'center',
      //       }}>
      //       <Text> A </Text>
      //     </View>
      //     <View
      //       style={{
      //         flex: 1,
      //         backgroundColor: '#a9a9a9',
      //         justifyContent: 'center',
      //         alignItems: 'center',
      //       }}>
      //       <Text> B </Text>
      //     </View>
      //     <View
      //       style={{
      //         flex: 1,
      //         backgroundColor: '#8b008b',
      //         justifyContent: 'center',
      //         alignItems: 'center',
      //       }}>
      //       <Text> C </Text>
      //     </View>
      //     <View
      //       style={{
      //         flex: 1,
      //         backgroundColor: '#800000',
      //         justifyContent: 'center',
      //         alignItems: 'center',
      //       }}>
      //       <Text> D </Text>
      //     </View>
      //   </View>
      // </SafeAreaView>
      // <SafeAreaView style={{flex: 10, flexDirection: 'column'}}>
      //   <View style={{flex: 3}}>
      //     <View
      //       style={{
      //         flex: 1,
      //         backgroundColor: 'red',
      //         justifyContent: 'center',
      //         alignItems: 'center',
      //         borderColor: 'black',
      //         borderWidth: 2,
      //       }}>
      //       <Text> 1 </Text>
      //     </View>
      //   </View>
      //   <View style={{flex: 7, flexDirection: 'row'}}>
      //     <View
      //       style={{
      //         flex: 2,
      //         backgroundColor: '#ffd700',
      //         justifyContent: 'center',
      //         alignItems: 'center',
      //         borderColor: 'black',
      //         borderWidth: 2,
      //       }}>
      //       <Text> 2 </Text>
      //     </View>
      //     <View
      //       style={{
      //         flex: 5,
      //         flexDirection: 'column',
      //       }}>
      //       <View
      //         style={{
      //           flex: 3.5,
      //           backgroundColor: '#1e90ff',
      //           justifyContent: 'center',
      //           alignItems: 'center',
      //           borderColor: 'black',
      //           borderWidth: 2,
      //         }}>
      //         <Text> 3 </Text>
      //       </View>
      //       <View
      //         style={{
      //           flex: 1.5,
      //           flexDirection: 'row',
      //         }}>
      //         <View
      //           style={{
      //             flex: 1,
      //             backgroundColor: '#ffb6c1',
      //             justifyContent: 'center',
      //             alignItems: 'center',
      //             borderColor: 'black',
      //             borderWidth: 2,
      //           }}>
      //           <Text> 4 </Text>
      //         </View>
      //         <View
      //           style={{
      //             flex: 1,
      //             backgroundColor: '#ba55d3',
      //             borderColor: 'black',
      //             borderWidth: 2,
      //             justifyContent: 'center',
      //             alignItems: 'center',
      //           }}>
      //           <Text> 5 </Text>
      //         </View>
      //       </View>
      //     </View>
      //   </View>
      // </SafeAreaView>
      // <SafeAreaView style={{flex: 10, flexDirection: 'column'}}>
      //   <View style={{flex: 1}}>
      //     <View
      //       style={{
      //         flex: 2,
      //         flexDirection: 'row',
      //       }}>
      //       <View
      //         style={{
      //           flex: 1,
      //           backgroundColor: 'red',
      //           justifyContent: 'center',
      //           alignItems: 'center',
      //           borderColor: 'black',
      //           borderWidth: 2,
      //         }}>
      //         <Text> 1 </Text>
      //       </View>
      //       <View
      //         style={{
      //           flex: 2,
      //           backgroundColor: 'gold',
      //           justifyContent: 'center',
      //           alignItems: 'center',
      //           borderColor: 'black',
      //           borderWidth: 2,
      //         }}>
      //         <Text> 2 </Text>
      //       </View>
      //     </View>
      //   </View>
      //   <View style={{flex: 5.5, flexDirection: 'row'}}>
      //     <View
      //       style={{
      //         flex: 3,
      //         flexDirection: 'column',
      //       }}>
      //       <View
      //         style={{
      //           flex: 1,
      //           backgroundColor: '#32cd32',
      //           justifyContent: 'center',
      //           alignItems: 'center',
      //           borderColor: 'black',
      //           borderWidth: 2,
      //         }}>
      //         <Text> 3 </Text>
      //       </View>
      //       <View
      //         style={{
      //           flex: 1,
      //           backgroundColor: '#ba55d3',
      //           justifyContent: 'center',
      //           alignItems: 'center',
      //           borderColor: 'black',
      //           borderWidth: 2,
      //         }}>
      //         <Text> 4 </Text>
      //       </View>
      //     </View>
      //     <View style={{flex: 1}}>
      //       <View
      //         style={{
      //           flex: 2,
      //           backgroundColor: '#d3d3d3',
      //           justifyContent: 'center',
      //           alignItems: 'center',
      //           borderColor: 'black',
      //           borderWidth: 2,
      //         }}>
      //         <Text> 5 </Text>
      //       </View>
      //     </View>
      //   </View>
      //   <View style={{flex: 2.5, flexDirection: 'row'}}>
      //     <View
      //       style={{
      //         flex: 2,
      //         backgroundColor: '#ff8c00',
      //         justifyContent: 'center',
      //         alignItems: 'center',
      //         borderColor: 'black',
      //         borderWidth: 2,
      //       }}>
      //       <Text> 6 </Text>
      //     </View>
      //     <View
      //       style={{
      //         flex: 2,
      //         backgroundColor: '#1e90ff',
      //         justifyContent: 'center',
      //         alignItems: 'center',
      //         borderColor: 'black',
      //         borderWidth: 2,
      //       }}>
      //       <Text> 7 </Text>
      //     </View>
      //   </View>
      // </SafeAreaView>
      <SafeAreaView style={{flex: 10, flexDirection: 'column'}}>
        <View style={{flex: 5, flexDirection: 'row'}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
            }}>
            <View
              style={{
                flex: 1,
                backgroundColor: '#32cd32',
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: 'black',
                borderWidth: 2,
              }}>
              <Text> 1 </Text>
            </View>
          </View>
          <View
            style={{
              flex: 4,
              flexDirection: 'column',
            }}>
            <View
              style={{
                flex: 1,
                backgroundColor: '#dc143c',
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: 'black',
                borderWidth: 2,
              }}>
              <Text> 3 </Text>
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: '#e9967a',
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: 'black',
                borderWidth: 2,
              }}>
              <Text> 4 </Text>
            </View>
          </View>
        </View>
        <View style={{flex: 5, flexDirection: 'row'}}>
          <View
            style={{
              flex: 1,
            }}>
            <View
              style={{
                flex: 1,
                backgroundColor: '#bdb76b',
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: 'black',
                borderWidth: 2,
              }}>
              <Text> 2 </Text>
            </View>
          </View>
          <View style={{flex: 2.5}}>
            <View
              style={{
                flex: 1,
                backgroundColor: '#00bfff',
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: 'black',
                borderWidth: 2,
              }}>
              <Text> 5 </Text>
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: '#9400d3',
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: 'black',
                borderWidth: 2,
              }}>
              <Text> 6 </Text>
            </View>
          </View>
          <View style={{flex: 1.5}}>
            <View
              style={{
                flex: 1,
                backgroundColor: '#8b0000',
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: 'black',
                borderWidth: 2,
              }}>
              <Text> 7 </Text>
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: '#ff8c00',
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: 'black',
                borderWidth: 2,
              }}>
              <Text> 8 </Text>
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: '#dcdcdc',
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: 'black',
                borderWidth: 2,
              }}>
              <Text> 9 </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
