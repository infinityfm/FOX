from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import get_user_model

FoxUser = get_user_model()


class FoxUserCreationForm(UserCreationForm):
    """
    A UserCreationForm with optional password inputs.
    """

    role = forms.CharField(max_length=16)
    name = forms.CharField(max_length=64)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields["password1"].required = False
        self.fields["password2"].required = False
        # If one field gets autocompleted but not the other, our 'neither
        # password or both password' validation will be triggered.
        self.fields["password1"].widget.attrs["autocomplete"] = "off"
        self.fields["password2"].widget.attrs["autocomplete"] = "off"
        self.fields["email"].required = True
        self.fields["name"].required = True
        # self.fields["is_new"].value = True

    def clean_password2(self):
        password1 = self.cleaned_data.get("password1")
        password2 = super().clean_password2()
        if bool(password1) ^ bool(password2):
            raise forms.ValidationError("Fill out both fields")
        return password2

    class Meta(UserCreationForm.Meta):
        fields = (
            "username",
            "email",
            "name",
        )


class ClientAdminCreationForm(FoxUserCreationForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields["role"].initial = FoxUser.Role.client_admin


class ClientManagerCreationForm(FoxUserCreationForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields["role"].initial = FoxUser.Role.client_manager


class ContractorCreationForm(FoxUserCreationForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields["role"].initial = FoxUser.Role.contractor
