from rest_framework import permissions

class IsCoachOrReadOnly(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True

        return request.user.is_staff
        

# build logic to only allow the change to occur on draft
# permissions with & statement