class CommentsController < ApplicationController
    before_action :find_answer, only: [:edit, :destroy, :update]
    before_action :authenticate_user!
    before_action :authorize_user!, except: [:create]

    def create
        @post = Post.find params[:post_id]
        @comment = Comment.new answer_params
        @comment.post = @post
        @comment.user = current_user

        if @comment.save
            redirect_to post_path(@post)
        else
            @comments = @post.comments.order(created_at: :desc)
            render "posts/show"
        end
    end

    def edit
    end

    def destroy
        @comment.destroy
        redirect_to post_path(@comment.post)
    end

    def update
        if @comment.update answer_params
            redirect_to post_path(@comment.post)
        else
            render :edit
        end
    end

    private
    def find_comment
        @comment = Comment.find params [:id]
    end

    def comment_params
        params.require(:answer).permit(:body)
    end

    def authorize_user!
        unless can? :crud, @comment
            flash[:danger] = "Access Denied"
            redirect_to root_path
        end
    end
end
