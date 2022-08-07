import React, { Component } from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as countActions from "@actions/counts";

class App extends Component {
  decrementCount() {
    let { count, actions } = this.props;
    count = count.count;
    count--;
    actions.changeCount(count);
  }

  incrementCount() {
    let { count, actions } = this.props;
    count = count.count;
    count++;
    actions.changeCount(count);
  }

  render() {
    console.log(this);
    const { count } = this.props;
    console.log(count.count);
    return (
      <View styles={styles.container}>
        <Button title='increment' onPress={() => this.incrementCount()} />
        <Text style={styles.textCenter}>{count.count}</Text>
        <Button title='decrement' onPress={() => this.decrementCount()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textCenter: {
    textAlign: "center",
  },
});

const mapStateToProps = (state) => ({
  count: state.count,
});

const ActionCreators = Object.assign({}, countActions);

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
