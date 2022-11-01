export const STORIES = [
  {
    id: 'fsdf534',
    previewImage:
      'https://firebasestorage.googleapis.com/v0/b/miniapp-6271a.appspot.com/o/rn_image_picker_lib_temp_f0347b5e-f9af-4599-8334-f1a495c6a912.jpg?alt=media&token=5982758d-5027-4284-a8ad-f33570ced508',
    stories: [
      {
        id: 1,
        image:
          'https://firebasestorage.googleapis.com/v0/b/miniapp-6271a.appspot.com/o/rn_image_picker_lib_temp_f0347b5e-f9af-4599-8334-f1a495c6a912.jpg?alt=media&token=5982758d-5027-4284-a8ad-f33570ced508',
        video: null,
      },
      {
        id: 2,
        image: 'https://proprikol.ru/wp-content/uploads/2020/12/samolety-krasivye-kartinki-2.jpg',
        video: null,
      },
      {
        id: 3,
        image: 'https://ves-mir-travel.ru/assets/images/samolet_vzletaet-t2.jpg',
        video: null,
      },
      {
        id: 4,
        image: 'https://interfax.com.ua/media/thumbs/images/2017/10/z2c8IyYne2B2.jpg',
        video: null,
      },
      {
        id: 5,
        image: null,
        video:
          'https://player.vimeo.com/external/489779797.sd.mp4?s=0d8949fb8c4388c6638f6ad40495c72b10ea102b&profile_id=165&oauth2_token_id=57447761',
      },
    ],
  },
  {
    id: 'f323423sdf534',
    previewImage:
      'https://firebasestorage.googleapis.com/v0/b/miniapp-6271a.appspot.com/o/rn_image_picker_lib_temp_9ca5a660-f9c8-41d1-9de9-3d23086c8b80.jpg?alt=media&token=4b4441c8-2ce2-40f0-89ee-deb119c12302',
    stories: [
      {
        id: 1,
        image:
          'https://firebasestorage.googleapis.com/v0/b/miniapp-6271a.appspot.com/o/rn_image_picker_lib_temp_9ca5a660-f9c8-41d1-9de9-3d23086c8b80.jpg?alt=media&token=4b4441c8-2ce2-40f0-89ee-deb119c12302',
        video: null,
      },
      {
       id: 3,
       image: null,
       video: 'https://player.vimeo.com/external/637210675.sd.mp4?s=d491d0b3c463e071ea7443e1c6fa1780c7cf7c25&profile_id=165&oauth2_token_id=57447761'
      },
      {
        id: 2,
        image: 'https://cs8.pikabu.ru/post_img/big/2016/02/14/5/1455430233196061590.jpg',
        video: null,
      },
    ],
  },
  {
    id: 'fsdFSDd534',
    previewImage:
      'https://firebasestorage.googleapis.com/v0/b/miniapp-6271a.appspot.com/o/FBEF12D8-2ED5-4414-8CEE-9EB8B5A768A6.jpg?alt=media&token=bfd1381b-db04-4871-8f12-cd82d0332854',
    stories: [
      {
        id: 1,
        image:
          'https://firebasestorage.googleapis.com/v0/b/miniapp-6271a.appspot.com/o/FBEF12D8-2ED5-4414-8CEE-9EB8B5A768A6.jpg?alt=media&token=bfd1381b-db04-4871-8f12-cd82d0332854',
        video: null,
      },
      {
        id: 2,
        image: 'https://assets.gq.ru/photos/5d9f570a974ced0009995c4a/16:9/w_2560%2Cc_limit/04.jpg',
        video: null,
      },
      {
        id: 3,
        image:
          'https://images.techinsider.ru/upload/img_cache/176/1764c8e86fef40698a6e541fc1716618_ce_3797x2025x0x292_cropped_666x444.jpg',
        video: null,
      },
      {
        id: 4,
        image: 'https://aussiedlerbote.de/wp-content/uploads/2022/01/samye-krasivye-vodopady-mira11.jpg',
        video: null,
      },
      {
        id: 5,
        image: 'https://student.kh.ua/wp-content/uploads/2021/03/Victoria-Falls.jpeg',
        video: null,
      },
    ],
  },
];

export type TStoryMain = {
  id: string;
  previewImage: string;
  stories: TStory[];
};

export type TStory = {
  id: number;
  image: string | null;
  video: string | null;
};
