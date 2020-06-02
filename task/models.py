from django.db import models
from user.models import UserProfile, Organization


class BaseModel(models.Model):
    """
    Base model for created and updated field
    """
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True

# # TODO we can remove this
# class Project(BaseModel):
#     """
#     Project model
#     """
#     name = models.CharField(max_length=50)
#     created_by = models.ForeignKey(UserProfile,
#                                    on_delete=models.CASCADE, related_name="projects")
#     favourite = models.BooleanField(default=False)
#
#     def __str__(self):
#         return self.name


class Task(BaseModel):
    """
    Task model
    """

    # status
    NEW = 1
    IN_PROGRESS = 2
    COMPLETED = 3

    # label
    PERSONAL = 1
    WORK = 2
    SHOPPING = 3
    OTHERS = 4

    # priority
    LOW = 1
    MEDIUM = 2
    HIGH = 3

    all_status_types = [[NEW, 'NEW'], [
        IN_PROGRESS, 'IN_PROGRESS'], [COMPLETED, 'COMPLETED']]

    all_label_types = [[PERSONAL, 'PERSONAL'], [
        WORK, 'WORK'], [SHOPPING, 'SHOPPING'], [OTHERS, 'OTHERS']]

    all_priority_types = [[LOW, 'LOW'], [
        MEDIUM, 'MEDIUM'], [HIGH, 'HIGH']]

    name = models.CharField(max_length=100)
    description = models.TextField(max_length=200)
    due_date = models.DateTimeField(blank=True, null=True)
    status = models.IntegerField(choices=all_status_types, default=NEW)
    label = models.IntegerField(choices=all_label_types, default=OTHERS)
    # project = models.ForeignKey(Project, on_delete=models.CASCADE,
    #                             related_name='tasks')
    assigned_to = models.OneToOneField(UserProfile, on_delete=models.CASCADE)
    priority = models.IntegerField(choices=all_priority_types, default=MEDIUM)
    created_by = models.ForeignKey(UserProfile,
                                   on_delete=models.CASCADE, related_name='tasks')
    archived = models.BooleanField(default=False)
    organization = models.ForeignKey(Organization, on_delete=models.CASCADE, related_name='tasks')

    def __str__(self):
        return self.name


class TaskInfo(models.Model):
    CONFIG_SCHEMA = {
        "type": "object",
        "properties": {
            "points": {"type": "string", "default": ""},
            "is_writable": {"type": "string", "default": ""},
            "frequency_writable": {"type": "string", "default": ""},
            "register_type": {"type": "string", "default": ""},
            "register_address": {"type": "string", "default": ""},
            "register_data_type": {"type": "string", "default": ""},
            "byte_order": {"type": "string", "default": ""},
            "low_op_rule_id": {"type": "string", "default": ""},
            "high_op_rule_id": {"type": "string", "default": ""}
        },
        "required": [],
        "additionalProperties": False
    }

    task = models.ForeignKey(Task, on_delete=models.CASCADE, related_name='task_info')


class Comment(BaseModel):
    """
    Comment model
    """
    text = models.TextField(max_length=200)
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE,
                             related_name='comments')
    task = models.ForeignKey(Task, on_delete=models.CASCADE, related_name='comments')

    def __str__(self):
        return self.id
