class Api::ChecklistsController < ApiController
  def index
    @checklists = Checklist.order(id: :asc)
    render json: @checklists
  end

  def create
    @checklist = Checklist.create!(checklist_params)
    render json: @checklist
  end

  def destroy
    @checklist = Checklist.find(params[:id])
    @checklist.destroy!
    render json: @checklist.id
  end

  private

  def checklist_params
    params.require(:checklist).permit(:title)
  end
end
