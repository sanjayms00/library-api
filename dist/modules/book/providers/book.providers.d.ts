/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import { Connection } from 'mongoose';
export declare const bookProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("mongoose").Model<{
        title: string;
        description: string;
        authorId: import("mongoose").Types.ObjectId;
        publishedDate: Date;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        title: string;
        description: string;
        authorId: import("mongoose").Types.ObjectId;
        publishedDate: Date;
    }> & {
        title: string;
        description: string;
        authorId: import("mongoose").Types.ObjectId;
        publishedDate: Date;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
        title: string;
        description: string;
        authorId: import("mongoose").Types.ObjectId;
        publishedDate: Date;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        title: string;
        description: string;
        authorId: import("mongoose").Types.ObjectId;
        publishedDate: Date;
    }>> & import("mongoose").FlatRecord<{
        title: string;
        description: string;
        authorId: import("mongoose").Types.ObjectId;
        publishedDate: Date;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    }>>;
    inject: string[];
}[];
