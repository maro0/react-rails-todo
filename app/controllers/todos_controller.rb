class TodosController < ApplicationController
    def index
        @todo = Todo.all
        render json: @todo
    end

    def create
        @todo = Todo.new(title: params[:title])
        @todo.save
    end

    def destroy
        @todo = Todo.find(params[:id])
        @todo.destroy
    end
end
