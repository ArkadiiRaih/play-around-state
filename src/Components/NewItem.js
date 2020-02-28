import React, { Component } from "react";
import { inject } from "mobx-react";
import { css } from "@emotion/core";

@inject("itemList")
class NewItem extends Component {
  state = { value: "" };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };

  handleSubmit = event => {
    const { value } = this.state;
    const { itemList } = this.props;

    event.preventDefault();
    itemList.addItem(value);

    this.setState({ value: "" });
  };

  render() {
    const { value } = this.state;

    return (
      <form
        css={css`
          display: flex;
        `}
        onSubmit={this.handleSubmit}
      >
        <input
          css={css`
            width: 100%;
          `}
          type="text"
          value={value}
          onChange={this.handleChange}
          placeholder="item name"
        />
        <button
          css={css`
            width: 100px;
          `}
          type="submit"
        >
          Add Item
        </button>
      </form>
    );
  }
}

export default NewItem;
