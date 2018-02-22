<template>
  <div class="app-container">
    <el-table stripe :data="table.items" v-loading.body="table.loading" element-loading-text="Loading" border fit highlight-current-row>
      <el-table-column v-for="c in table.columns" v-bind:key="c" :label="c" :prop="c">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="handlePublish(scope.row)" :disabled="scope.row.status == 1" size="mini" type="primary" plain>发布</el-button>
          <el-button @click="handleDelete(scope.row)" :disabled="scope.row.status == 0" size="mini" type="danger" plain>删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="pagination-container">
      <el-pagination background @current-change="handleCurrentPageChange" :current-page.sync="table.query.page" @size-change="handlePageSizeChange" :page-sizes="table.page_sizes" :page-size="table.query.per_page" layout="total, sizes, prev, pager, next, jumper" :total="table.total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { getList, handlePagination } from '@/api/table'

export default {
  data() {
    return {
      table: {
        name: 'domains',
        page_sizes: [5, 15, 20],
        items: null,
        columns: null,
        loading: true,
        total: 0,
        query: {
          page: 1,
          per_page: 5
        }
      }
    }
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  created() {
    this.fetchTable()
  },
  methods: {
    fetchTable() {
      this.table.loading = true
      getList(this.table.name, this.table.query).then(response => {
        this.table.items = response.items
        this.table.columns = []
        for (var col in this.table.items[0]) {
          this.table.columns.push(col)
        }
        this.table.columns.sort()
        this.table.loading = false
        handlePagination(response, this.table)
      }).catch(error => { console.log(error) })
    },
    handlePublish(item) {
      // var data = { 'status': 1 }
      // editRecord('sentence_pattern', item._id, data)
      //   .then(response => {
      //     this.$message('提交成功！')
      //     // update table
      //     this.fetchTable()
      //   })
      //   .catch(error => {
      //     this.$message('提交失败: ' + error)
      //     console.log(error)
      //   })
      this.$message('handlePublish')
    },
    handleDelete(item) {
      // var data = { 'status': 0 }
      // putRecord('sentence_pattern', item._id, data)
      //   .then(response => {
      //     this.$message('提交成功！')
      //     // update table
      //     this.fetchTable()
      //   })
      //   .catch(error => {
      //     this.$message('提交失败: ' + error)
      //     console.log(error)
      //   })
      this.$message('handleDelete')
    },
    handleCurrentPageChange(curPage) {
      this.table.query.page = curPage
      this.fetchTable()
    },
    handlePageSizeChange(per_page) {
      this.table.query.per_page = per_page
      this.fetchTable()
    }
  }
}
</script>
