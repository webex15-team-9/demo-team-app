<template>
  <h1>Vue メモ</h1>

  <div class="memo-list">
    <button class="checked-memo-delete" v-on:click="deleteCheckedMemo">
      チェックを入れた項目を全て削除
    </button>
    <ul class="memo-list_container">
      <li v-for="(memo, index) in memos" v-bind:key="index" class="memo">
        <input type="checkbox" v-model="memo.isDone" />
        <span v-bind:class="{ isDone: memo.isDone }">
          {{ memo.content }}
        </span>
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
      isDone: false,
    }
  },
  methods: {
    deleteMemo: function (index) {
      this.memos.splice(index, 1)
    },
    addMemo: function () {
      if (this.inputMemo !== "") {
        const memo = { content: this.inputMemo, isDone: false }
        this.memos.push(memo)
        this.inputMemo = ""
      }
    },
    deleteCheckedMemo: function () {
      const remains = []
      const memos = this.memos
      const length = memos.length
      for (let i = 0; i < length; i++) {
        const memo = memos[i]
        if (memo.isDone == false) {
          remains.push(memo)
        }
        this.memos = remains
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

.isDone {
  text-decoration-line: line-through;
  color: blue;
}

.memo_text {
  justify-content: space-between;
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

.checked-memo-delete {
  margin-bottom: 15px;
  padding: 0.5rem 0.5rem;
  border: solid 1px black;
  border-radius: 5px;
  background-color: gainsboro;
}

.checked-memo-delete:hover {
  background-color: gray;
}
</style>
