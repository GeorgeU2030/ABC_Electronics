class CustomRouter:
    def db_for_read(self, model, **hints):
        if model._meta.app_label == 'salesApp' and model._meta.model_name == 'customerinfo':
            return 'mongodb'
        return 'default'

    def db_for_write(self, model, **hints):
        if model._meta.app_label == 'salesApp' and model._meta.model_name == 'customerinfo':
            return 'mongodb'
        return 'default'

    def allow_migrate(self, db, app_label, model_name=None, **hints):
        if app_label == 'salesApp' and model_name == 'customerinfo':
            return db == 'mongodb'
        return db == 'default'
    
    def allow_relation(self, obj1, obj2, **hints):
        if (
            obj1._state.db in {'mongodb', 'default'} and
            obj2._state.db in {'mongodb', 'default'}
        ):
            return True
        return None
