from rest_framework import serializers
from back.models import Contractor


class ContractorListSerializer(serializers.ModelSerializer):

    contact_person = serializers.SerializerMethodField()

    class Meta:
        model = Contractor
        fields = [
            "id",
            "username",
            "related_company",
            "contact_person",
            "company_phone",
        ]

    def get_contact_person(self, obj):
        return obj.name


class ContractorSerializer(serializers.ModelSerializer):

    default = ""

    class Meta:
        model = Contractor
        fields = [
            "id",
            "username",
            "name",
            "email",
            "company",
            "company_phone",
            "role",
            "related_company",
            # "is_active",
        ]
