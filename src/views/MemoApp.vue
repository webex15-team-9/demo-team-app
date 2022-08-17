<template>
  <h1>Vue メモ</h1>
  <div class="memo-list">
    <ul class="memo-list_container">
      <li v-for="(memo, index) in memos" v-bind:key="index" class="memo">
        <div class="memo_checkbox">
          <input type="checkbox" />
        </div>
        <div class="memo_text">{{ memo.content }}</div>
        <button class="memo_delete" v-on:click="deleteMemo(index)">削除</button>
      </li>
    </ul>
    <div class="add-memo-field">
      <input class="add-memo-field_input" type="text" v-model="inputMemo" />
      <button class="add-memo-field_button" v-on:click="addMemo">追加</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputMemo: "",
      memos: [],
    }
  },
  methods: {
    deleteMemo: function (index) {
      this.memos.splice(index, 1)
    },
    addMemo: function () {
      if (this.inputMemo !== "") {
        const memo = { content: this.inputMemo }
        this.memos.push(memo)
        this.inputMemo = ""
      }
    },
  },
}
</script>

<style scoped>
.memo-list {
  padding-left: 5rem;
  padding-right: 5rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-width: 512px;
  margin-left: auto;
  margin-right: auto;
}

.memo-list_container {
  padding: 0;
}

.memo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border-radius: 5px;
}

.memo:hover {
  color: white;
  background-color: #b23b61;
}

.memo_text {
  margin-left: 2rem;
  text-align: left;
}

.memo_delete {
  margin-left: 1rem;
  padding: 0.5rem 0.5rem;
  border: solid 1px black;
  border-radius: 5px;
  background-color: white;
}

.memo_delete:hover {
  background-color: #b2ae3b;
  border-radius: 5px;
}

.add-memo-field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.add-memo-field_input {
  height: 5px;
  padding: 20px;
  font-size: 15px;
}

.add-memo-field_button {
  padding: 0.5rem 0.5rem;
  border: solid 1px black;
  border-radius: 5px;
  background-color: white;
}

.add-memo-field_button:hover {
  background-color: #b2ae3b;
  border-radius: 5px;
}
</style>
